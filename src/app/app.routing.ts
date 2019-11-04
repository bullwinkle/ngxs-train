import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { FEATURES_CONFIG } from './features-config';
import { PageNotFoundComponent } from './shared';


const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: FEATURES_CONFIG.profile.url,
  },
  {
    path: FEATURES_CONFIG.profile.url,
    loadChildren: () => import('./features/profile/profile.module').then(exports => exports.ProfileModule),
  },
  {
    path: FEATURES_CONFIG.blog.url,
    loadChildren: () => import('./features/blog/blog.module').then(exports => exports.BlogModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: !environment.production,
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
