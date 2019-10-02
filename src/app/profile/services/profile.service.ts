import { Inject } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProfileActions } from '../actions/profile.actions';
import { ProfileInfoModel } from '../models/profile-Info.model';
import { ProfileSkillModel } from '../models/profile-skill.model';
import { ProfileState } from '../state/profile.state';
import { ProfileApiService } from './profileApiService';

@Inject({
  provideIn: 'root',
})
export class ProfileService {
  constructor (
    private profileApiService: ProfileApiService,
    private store: Store,
  ) {
  }

  @Select(ProfileState.getInfo)
  info$: Observable<ProfileInfoModel>;

  @Select(ProfileState.getSkills)
  skills$: Observable<ProfileSkillModel[]>;

  @Dispatch()
  async loadSkills () {
    const existingSkills = this.store.selectSnapshot(state => state.profile.skills);

    if (existingSkills) {
      return true;
    } else {
      return new ProfileActions.UpdateSkills(await this.profileApiService.getSkills());
    }
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
