export class ProfileSkillModel {
  id: string;
  name: string;
  value: number;

  constructor (data: Partial<ProfileSkillModel> = {}) {
    Object.assign(this, data, {
      id: data.id || `id_${Math.floor(Math.random() * 1000000)}`,
      value: +(data.value || 0)
    });
  }
}
