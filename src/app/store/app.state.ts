import { State } from '@ngxs/store';

import { AppStateModel } from './app-state.model';

@State<AppStateModel>({
  name: 'app',
  defaults: new AppStateModel(),
})
export class AppState {}
