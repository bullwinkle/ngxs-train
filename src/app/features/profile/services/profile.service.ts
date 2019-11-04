import { Inject } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ProfileInfoModel } from '../models/profile-Info.model';
import { ProfileSkillModel } from '../models/profile-skill.model';
import { ProfileActions, ProfileState } from '../state';
import { ProfileApiService } from './profile.api.service';

@Inject({
  provideIn: 'root',
})
export class ProfileService {
  constructor (
    private profileApiService: ProfileApiService,
  ) {
  }

  @Select(ProfileState.getInfo)
  info$: Observable<ProfileInfoModel>;

  @Select(ProfileState.getSkills)
  skills$: Observable<ProfileSkillModel[]>;

  @SelectSnapshot(ProfileState.getSkills)
  skills: ProfileSkillModel[];

  async getSkills (): Promise<ProfileSkillModel[]> {
    return this.skills || this.loadSkills()
      .then(() => this.skills);
  }

  @Dispatch()
  async loadSkills () {
    return new ProfileActions.UpdateSkills(await this.profileApiService.getSkills());
  }

  @Dispatch()
  async updateSkill (skill: ProfileSkillModel) {
    return new ProfileActions.UpdateSkill(skill);
  }

  @Dispatch()
  async updateSkills (skills: ProfileSkillModel[]) {
    return new ProfileActions.UpdateSkills(skills);
  }

  @Dispatch()
  async updateProfile (profileData: Partial<ProfileInfoModel>) {
    return new ProfileActions.UpdateProfileInfo(profileData);
  }
}
