import { State } from '@ngxs/store';

class AppStateModel {

}

@State<AppStateModel>({
  name: 'app',
  defaults: {},
})
export class AppState {}
