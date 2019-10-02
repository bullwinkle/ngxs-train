import { State } from '@ngxs/store';
import { ThingsState } from './things/state/things.state';

class AppStateModel {

}

@State<AppStateModel>({
  name: 'app_state',
  defaults: {},
})
export class AppState {}
