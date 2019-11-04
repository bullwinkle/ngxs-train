import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@shared';

import { environment } from '../environments/environment';
import { FEATURES_ROUTES_CONFIG } from './features/features-routes.config';

if (!FEATURES_ROUTES_CONFIG.enabled.includes(FEATURES_ROUTES_CONFIG.default)) {
  throw new Error('You have to include default route to the list of enabled routes!');
}

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: FEATURES_ROUTES_CONFIG.default.path,
  },
  ...FEATURES_ROUTES_CONFIG.enabled,
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
