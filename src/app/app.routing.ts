import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Route[] = [
  {
    path: 'user',
    loadChildren: () => import('./profile/profile.module').then((exports) => exports.ProfileModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
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
