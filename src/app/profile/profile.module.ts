import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile.routing';

import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileSkillsComponent } from './components/profile-skills/profile-skills.component';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { ProfileSkillsPageComponent } from './components/profile-skills-page/profile-skills-page.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';

import { ProfileService } from './services/profile.service';
import { ProfileApiService } from './services/profileApiService';
import { ProfileState } from './state/profile.state';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileSkillsComponent,
    ProfileRootComponent,
    ProfileSkillsPageComponent,
    ProfileInfoComponent,
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule,
    NgxsModule.forFeature([ProfileState]),
  ],
  providers: [
    ProfileService,
    ProfileApiService,
  ],
  exports: [
    ProfileRoutingModule,
  ],
})
export class ProfileModule {}
