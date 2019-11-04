import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { FEATURES_CONFIG, PageNotFoundComponent } from './shared';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: FEATURES_CONFIG.defaultFeature.url,
  },
  {
    path: FEATURES_CONFIG.profile.url,
    loadChildren: FEATURES_CONFIG.profile.loadModule,
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
