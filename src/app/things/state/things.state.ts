import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddThing, RemoveThing } from '../actions/things.actions';
import { ThingModel } from '../models/thing.model';

export class ThingsStateModel {
  things: ThingModel[];
}


@State<ThingsStateModel>({
  name: 'things',
  defaults: {
    things: [],
  },
})
export class ThingsState {
  @Selector()
  static getThings ({ things }: ThingsStateModel): ThingModel[] {
    return things;
  }

  @Action(AddThing)
  addThing ({ getState, patchState }: StateContext<ThingsStateModel>, { payload }: AddThing) {
    patchState({
      things: [
        ...getState().things,
        new ThingModel(payload),
      ],
    });
  }

  @Action(RemoveThing)
  removeThing ({ getState, patchState }: StateContext<ThingsStateModel>, { payload }: RemoveThing) {
    patchState({
      things: getState().things.filter(({ id }) => id !== payload),
    });
  }


}

