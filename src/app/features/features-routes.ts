import { Route } from '@angular/router';


export const PROFILE_ROUTE: Route = {
  path: 'user',
  loadChildren: () => import('./profile/profile.module').then(exports => exports.ProfileModule),
};

export const BLOG_ROUTE: Route = {
  path: 'blog',
  loadChildren: () => import('./blog/blog.module').then(exports => exports.BlogModule),
};
