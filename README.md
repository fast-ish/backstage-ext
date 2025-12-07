# Developer Portal

A customized [Backstage](https://backstage.io) developer portal with GitHub OAuth authentication, Kubernetes integration, and comprehensive service catalog management.

## Quick Start

```sh
yarn install
yarn start
```

This starts both the frontend (port 3000) and backend (port 7007) in development mode.

## Project Structure

```
├── packages/
│   ├── app/              # React frontend
│   └── backend/          # Node.js backend
├── plugins/              # Custom plugins
├── catalog/              # Catalog entity definitions
├── app-config.yaml       # Development configuration
├── app-config.production.yaml  # Production configuration
└── Dockerfile            # Multi-stage Docker build
```

## Features

### Core Functionality
- **Service Catalog** - Discover and manage services, APIs, systems, and components
- **Software Templates** - Scaffold new services with GitHub integration
- **TechDocs** - Unified technical documentation with MkDocs
- **Search** - Full-text search across catalog and documentation
- **API Documentation** - API discovery and visualization

### Integrations
- **GitHub OAuth** - Single sign-on with automatic user provisioning
- **Kubernetes** - Multi-cluster visibility for services and pods
- **Notifications** - Real-time notification system

### Entity Types
Components, APIs, Resources, Systems, Domains, Groups, Users, Templates, Locations

## Configuration

### Environment Variables

| Variable | Description |
|----------|-------------|
| `GITHUB_TOKEN` | GitHub API access token |
| `AUTH_GITHUB_CLIENT_ID` | GitHub OAuth App client ID |
| `AUTH_GITHUB_CLIENT_SECRET` | GitHub OAuth App client secret |
| `POSTGRES_HOST` | PostgreSQL host (production) |
| `POSTGRES_PORT` | PostgreSQL port (production) |
| `POSTGRES_USER` | PostgreSQL user (production) |
| `POSTGRES_PASSWORD` | PostgreSQL password (production) |
| `APP_BASE_URL` | Frontend URL (production) |
| `BACKEND_BASE_URL` | Backend URL (production) |

### GitHub OAuth Setup

1. Create a GitHub OAuth App at https://github.com/settings/developers
2. Set Homepage URL to `http://localhost:3000` (development)
3. Set Authorization callback URL to `http://localhost:7007/api/auth/github/handler/frame`
4. Add credentials to environment or `app-config.local.yaml`

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start development servers |
| `yarn build:all` | Build all packages |
| `yarn build:backend` | Build backend only |
| `yarn tsc` | TypeScript type checking |
| `yarn test` | Run unit tests |
| `yarn test:e2e` | Run Playwright E2E tests |
| `yarn lint` | Lint codebase |
| `yarn fix` | Auto-fix lint issues |
| `yarn clean` | Clean build artifacts |
| `yarn new` | Scaffold new plugin/package |

### Adding Catalog Entities

Add entities to `catalog/` or reference external sources in `app-config.yaml`:

```yaml
catalog:
  locations:
    - type: file
      target: ./catalog/my-entities.yaml
    - type: url
      target: https://github.com/org/repo/blob/main/catalog-info.yaml
```

## Deployment

### Docker

Build and run the container:

```sh
yarn build-image
docker run -p 7007:7007 backstage
```

The image includes:
- Node.js 20 runtime
- Python 3 + MkDocs for TechDocs
- Health check on `/healthcheck`

### Production Configuration

Production uses PostgreSQL and environment-based URLs. Key differences from development:
- Database: PostgreSQL instead of SQLite
- TechDocs: Local builder in local mode
- Kubernetes: Multi-tenant mode enabled

## Customizations

### GitHub Authentication Resolver

Custom sign-in resolver in `packages/backend/src/authModule.ts` maps GitHub users to Backstage entities automatically:

```
GitHub username → user:default/{username}
```

### Entity Pages

Customized entity layouts in `packages/app/src/components/catalog/EntityPage.tsx` with:
- Service/Website pages with CI/CD and Kubernetes tabs
- API pages with definition viewers
- System/Domain pages with dependency diagrams
- User/Group profile cards

## Requirements

- Node.js 20 or 22
- Yarn 4.4.1+
- PostgreSQL (production)
- GitHub OAuth App
