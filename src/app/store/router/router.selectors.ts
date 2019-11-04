// Define your router selectors in '/store/router/router.selectors.ts
import { RouterState, RouterStateModel as RouterStateOuterModel } from '@ngxs/router-plugin';
import { Selector } from '@ngxs/store';
import { RouterStateModel } from './router-state.model';

export class RouterStateSelectors {
  // base selector
  @Selector([RouterState])
  static data ({ state: { data } }: RouterStateOuterModel<RouterStateModel>) {
    return data;
  }

  @Selector([RouterState])
  static params ({ state: { params } }: RouterStateOuterModel<RouterStateModel>) {
    return params;
  }

  @Selector([RouterState])
  static queryParams ({ state: { queryParams } }: RouterStateOuterModel<RouterStateModel>) {
    return queryParams;
  }

  @Selector([RouterState])
  static url ({ state: { url } }: RouterStateOuterModel<RouterStateModel>) {
    return url;
  }
}
