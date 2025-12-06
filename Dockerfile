# Multi-stage Dockerfile for Backstage with GitHub OAuth
# Based on: https://backstage.io/docs/deployment/docker#multi-stage-build

# Stage 1: Install dependencies and build
FROM node:20-bookworm-slim AS build

ENV PYTHON=/usr/bin/python3

RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 g++ build-essential git && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy everything
COPY . .

# Install all dependencies
RUN corepack enable && yarn install --immutable

# Build TypeScript and backend
RUN yarn tsc
RUN yarn build:backend

# Stage 2: Production image
FROM node:20-bookworm-slim

ENV PYTHON=/usr/bin/python3
ENV NODE_ENV=production
# Node.js performance tuning
ENV NODE_OPTIONS="--no-node-snapshot --max-old-space-size=1536"
# Disable Next.js telemetry if using any Next.js components
ENV NEXT_TELEMETRY_DISABLED=1
# Ensure pip-installed binaries are in PATH
ENV PATH="/usr/local/bin:$PATH"

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      python3 \
      python3-pip \
      python3-venv \
      curl \
      git \
      build-essential && \
    # Install mkdocs for TechDocs local builder
    pip3 install --no-cache-dir --break-system-packages \
      mkdocs-techdocs-core && \
    # Verify mkdocs is installed and in PATH
    which mkdocs && mkdocs --version && \
    rm -rf /var/lib/apt/lists/* && \
    corepack enable

USER node
WORKDIR /app

# Copy yarn configs
COPY --chown=node:node .yarn ./.yarn
COPY --chown=node:node .yarnrc.yml ./
COPY --chown=node:node backstage.json ./

# Copy built skeleton and install production deps
COPY --chown=node:node --from=build /app/yarn.lock /app/package.json ./
COPY --chown=node:node --from=build /app/packages/backend/dist/skeleton.tar.gz ./
RUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz

RUN yarn workspaces focus --all --production

# Copy catalog entities
COPY --chown=node:node --from=build /app/catalog ./catalog

# Copy built bundle and configs
COPY --chown=node:node --from=build /app/packages/backend/dist/bundle.tar.gz ./
COPY --chown=node:node --from=build /app/app-config*.yaml ./
RUN tar xzf bundle.tar.gz && rm bundle.tar.gz

EXPOSE 7007

# Healthcheck for container orchestration
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:7007/healthcheck || exit 1

CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]
