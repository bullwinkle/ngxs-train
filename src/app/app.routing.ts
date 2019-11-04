import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { FEATURES_CONFIG, PageNotFoundComponent } from './shared';

const { defaultFeature, ...ALL_FEATURES } = FEATURES_CONFIG;

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: defaultFeature.url,
  },
  ...Object.values(ALL_FEATURES).map(FEATURE_CONFIG => ({
    path: FEATURE_CONFIG.url,
    loadChildren: FEATURE_CONFIG.loadModule,
  })),
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
