import { ProfileInfoModel } from '../models/profile-Info.model';
import { ProfileSkillModel } from '../models/profile-skill.model';

export class ProfileStateModel {
  info: ProfileInfoModel;
  skills: ProfileSkillModel[];
}
