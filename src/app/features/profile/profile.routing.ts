import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@shared';

import { PROFILE_ROUTE } from '../features-routes';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { ProfileSkillsPageComponent } from './components/profile-skills-page/profile-skills-page.component';
import { SkillsResolver } from './services/skills-resolver.service';

const routes: Route[] = [
  {
    path: '',
    component: ProfileRootComponent,
    resolve: {
      skills: SkillsResolver,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'skills',
        component: ProfileSkillsPageComponent,
      },
      {
        path: '**',
        data: {
          home: `/${PROFILE_ROUTE.path}`,
        },
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
  providers: [
    SkillsResolver,
  ],
})
export class ProfileRoutingModule {}
