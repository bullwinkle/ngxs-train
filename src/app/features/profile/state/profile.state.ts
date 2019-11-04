import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProfileInfoModel } from '../models/profile-Info.model';
import { ProfileSkillModel } from '../models/profile-skill.model';
import { ProfileStateModel } from './profile-state.model';
import { ProfileActions } from './profile.actions';

@State<ProfileStateModel>({
  name: 'profile',
  defaults: {
    info: new ProfileInfoModel(),
    skills: undefined,
  },
})
export class ProfileState {
  @Selector()
  static getSkills ({ skills }: ProfileStateModel): ProfileSkillModel[] {
    return skills;
  }

  @Selector()
  static getInfo ({ info }: ProfileStateModel): ProfileInfoModel {
    return info;
  }

  @Action(ProfileActions.UpdateSkills)
  updateSkills ({ getState, patchState }: StateContext<ProfileStateModel>, { payload }: ProfileActions.UpdateSkills) {
    patchState({ skills: payload });
  }

  @Action(ProfileActions.UpdateProfileInfo)
  updateProfile ({ getState, patchState }: StateContext<ProfileStateModel>, { payload }: ProfileActions.UpdateProfileInfo) {
    const { info } = getState();

    const newInfo = new ProfileInfoModel({ ...info, ...payload });

    patchState({
      info: newInfo,
    });
  }
}

