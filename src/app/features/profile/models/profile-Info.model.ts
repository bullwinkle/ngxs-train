export class ProfileInfoModel {
  userName: string = '';
  feedback: string = '';

  constructor (data: Partial<ProfileInfoModel> = {}) {
    Object.assign(this, data);
  }
}
