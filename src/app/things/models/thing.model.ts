export class ThingModel {
  id: string;
  name: string;
  type: string;

  constructor (data: Partial<ThingModel> = {}) {
    Object.assign(this, data, {
      id: `id_${Math.floor(Math.random() * 1000000)}`,
    });
  }
}
