import { createBackendModule } from '@backstage/backend-plugin-api';
import {
  authProvidersExtensionPoint,
  createOAuthProviderFactory,
} from '@backstage/plugin-auth-node';
import { githubAuthenticator } from '@backstage/plugin-auth-backend-module-github-provider';

export const authModuleGithubSignIn = createBackendModule({
  pluginId: 'auth',
  moduleId: 'github-sign-in',
  register(reg) {
    reg.registerInit({
      deps: { providers: authProvidersExtensionPoint },
      async init({ providers }) {
        providers.registerProvider({
          providerId: 'github',
          factory: createOAuthProviderFactory({
            authenticator: githubAuthenticator,
            signInResolver: async (info, ctx) => {
              const { result } = info;
              // Use the GitHub username from the fullProfile
              const username = result.fullProfile.username;
              if (!username) {
                throw new Error('GitHub profile does not contain a username');
              }
              // Issue a token with the GitHub username as the entity ref
              return ctx.issueToken({
                claims: {
                  sub: `user:default/${username}`,
                  ent: [`user:default/${username}`],
                },
              });
            },
          }),
        });
      },
    });
  },
});
