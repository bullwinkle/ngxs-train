import { ThingModel } from '../models/thing.model';

export class AddThing {
  static readonly type = '[THINGS] add';

  constructor (public payload: Partial<ThingModel>) {
  }
}

export class RemoveThing {
  static readonly type = '[THINGS] remove';

  constructor (public payload: string) {
  }
}
