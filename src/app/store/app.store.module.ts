import { NgModule } from '@angular/core';
import { AsyncStorageEngineProxy, NgxsAsyncStoragePluginModule } from '@ngxs-labs/async-storage-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../../environments/environment';

import { AppState } from './app.state';

export class AsyncStorageEngine extends AsyncStorageEngineProxy {
  constructor () {
    super(localStorage);
  }
}

export function serialize ({ router, ...resultState }) {
  return JSON.stringify(resultState);
}

export function deserialize (jsonString) {
  const { router: _, ...resultState } = JSON.parse(jsonString);
  return resultState;
}

@NgModule({
  imports: [
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }),
    NgxsAsyncStoragePluginModule.forRoot(AsyncStorageEngine, {
      /* Do not save 'router' state from  NgxsRouterPlugin (fix redirect to root) */
      serialize, deserialize,
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  exports: [
    NgxsModule,
  ],
})
export class AppStoreModule {}
