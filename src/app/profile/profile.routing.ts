import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { ProfileSkillsPageComponent } from './components/profile-skills-page/profile-skills-page.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileRootComponent,
    children: [
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'skills',
        component: ProfileSkillsPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProfileRoutingModule { }
