import { Inject } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddThing, RemoveThing } from './actions/things.actions';
import { ThingModel } from './models/thing.model';
import { ThingsState } from './state/things.state';

@Inject({
  provideIn: 'root',
})
export class ThingsService {
  @Select(ThingsState.getThings)
  things$: Observable<ThingModel[]>;

  @Dispatch()
  async createThing (name: string, type: string) {
    return new AddThing({ name, type });
  }

  @Dispatch()
  async removeThing (thingId: string) {
    return new RemoveThing(thingId);
  }
}
