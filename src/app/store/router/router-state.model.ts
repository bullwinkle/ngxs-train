import { Params, RouterStateSnapshot } from '@angular/router';

export interface IRouterState {
  url: string;
  params: Params;
  queryParams: Params;
  data: any;
}

export class RouterStateModel implements IRouterState {
  url: string;
  params: Params;
  queryParams: Params;
  data: any;

  constructor (routerState: RouterStateSnapshot) {
    const {
            url,
            root: { queryParams },
          } = routerState;

    let { root: route } = routerState;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params, data } = route;

    if (route.params.title) {
      data.title = route.params.title;
    }

    Object.assign(this, { url, params, queryParams, data });
  }
}

export class RouterStateMergedModel implements IRouterState {
  url: string         = '';
  params: Params      = {};
  queryParams: Params = {};
  data: any           = {};

  constructor (routerState: RouterStateSnapshot) {
    const {
            url,
            root: { queryParams },
          } = routerState;

    this.url = url;

    let { root: route } = routerState;
    do {
      route = route.firstChild || route;

      const { params, data } = route;

      if (params.title) {
        data.title = route.params.title;
      }

      Object.assign(this.data, data);
      Object.assign(this.params, params);
      Object.assign(this.queryParams, queryParams);
    } while (route.firstChild);
  }
}
