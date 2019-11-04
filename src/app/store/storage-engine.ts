import { AsyncStorageEngineProxy, NgxsStoragePluginOptions } from '@ngxs-labs/async-storage-plugin';

export class AsyncStorageEngine extends AsyncStorageEngineProxy {
  constructor () {
    super(localStorage);
  }
}

export const asyncStorageOptions: NgxsStoragePluginOptions = {
  /* Exclude 'router' state from  NgxsRouterPlugin (fix redirect to root) */
  serialize ({ router, ...resultState }) {
    return JSON.stringify(resultState);
  },

  deserialize (jsonString) {
    const { router: _, ...resultState } = JSON.parse(jsonString);
    return resultState;
  },
};
