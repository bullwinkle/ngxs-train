import { IFeatureConfig } from './shared';

export const FEATURES_CONFIG: Record<'defaultFeature' | 'profile' | 'blog', IFeatureConfig> = {
  get defaultFeature (): IFeatureConfig {
    return this.profile;
  },

  profile: {
    url: 'user',
    loadModule: () => import('./features/profile/profile.module').then(exports => exports.ProfileModule),
  },

  blog: {
    url: 'blog',
    loadModule: () => import('./features/blog/blog.module').then(exports => exports.BlogModule),
  },
};
