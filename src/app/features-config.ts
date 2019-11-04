import { IFeatureConfig } from './shared';

export const FEATURES_CONFIG: Record<'profile' | 'blog', IFeatureConfig> = {
  profile: {
    url: 'user',
  },

  blog: {
    url: 'blog',
  },
};
