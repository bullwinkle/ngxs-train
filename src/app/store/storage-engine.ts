import { AsyncStorageEngineProxy, NgxsStoragePluginOptions } from '@ngxs-labs/async-storage-plugin';

export class AsyncLocalStorageEngine extends AsyncStorageEngineProxy {
  constructor () {
    super(localStorage);
  }
}

export function serialize ({ router, ...resultState }): string {
  try {
    return JSON.stringify(resultState);
  } catch (error) {
    console.error(error);
    return '';
  }
}

export function deserialize (jsonString: string): any {
  try {
    const { router: _, ...resultState } = JSON.parse(jsonString);
    return resultState;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export const storagePluginOptions: NgxsStoragePluginOptions = { serialize, deserialize };
