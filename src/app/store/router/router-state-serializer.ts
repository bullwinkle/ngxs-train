import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { RouterStateModel } from './router-state.model';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateModel> {
  serialize (routerState: RouterStateSnapshot): RouterStateModel {
    return new RouterStateModel(routerState);
  }
}
