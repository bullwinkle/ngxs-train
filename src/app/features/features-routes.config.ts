import { Route } from '@angular/router';
import { BLOG_ROUTE, PROFILE_ROUTE } from './features-routes';

export const FEATURES_ROUTES_CONFIG: { default: Route; enabled: Route[] } = {
  default: PROFILE_ROUTE,
  enabled: [
    PROFILE_ROUTE,
    BLOG_ROUTE,
  ],
};
