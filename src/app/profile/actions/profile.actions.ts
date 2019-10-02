import { ProfileInfoModel } from '../models/profile-Info.model';
import { ProfileSkillModel } from '../models/profile-skill.model';

export namespace ProfileActions {
  export class UpdateProfileInfo {
    static readonly type = '[PROFILE] updateInfo';

    constructor (public payload: Partial<ProfileInfoModel>) {
    }
  }

  export class UpdateSkills {
    static readonly type = '[PROFILE] updateSkills';

    constructor (public payload: ProfileSkillModel[]) {
    }
  }

  export class UpdateSkill {
    static readonly type = '[PROFILE] updateSkill';

    constructor (public payload: Partial<ProfileSkillModel>) {
    }
  }
}
