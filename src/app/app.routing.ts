import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Route[] = [
  {
    path: 'user',
    loadChildren: () => import('./profile/profile.module').then(({ ProfileModule }) => ProfileModule),
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
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
