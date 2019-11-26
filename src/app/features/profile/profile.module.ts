import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '@shared';

import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { ProfileSkillsPageComponent } from './components/profile-skills-page/profile-skills-page.component';
import { ProfileSkillsComponent } from './components/profile-skills/profile-skills.component';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileApiService } from './services/profile.api.service';
import { ProfileService } from './services/profile.service';
import { profileState } from './state';

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
    NgxsModule.forFeature(profileState),
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
