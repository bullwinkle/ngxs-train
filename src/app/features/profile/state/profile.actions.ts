import { ProfileInfoModel } from '../models/profile-Info.model';
import { ProfileSkillModel } from '../models/profile-skill.model';

export namespace ProfileActions {
  export class UpdateProfileInfo {
    static readonly type = '[profile] updateInfo';

    constructor (public payload: Partial<ProfileInfoModel>) {
    }
  }

  export class UpdateSkills {
    static readonly type = '[profile] updateSkills';

    constructor (public payload: ProfileSkillModel[]) {
    }
  }

  export class UpdateSkill {
    static readonly type = '[profile] updateSkill';

    constructor (public payload: Partial<ProfileSkillModel>) {
    }
  }
}
