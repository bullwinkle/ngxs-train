import { NgModule } from '@angular/core';
import { NgxsAsyncStoragePluginModule } from '@ngxs-labs/async-storage-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../../environments/environment';

import { AppState } from './app.state';
import { CustomRouterStateSerializer } from './router/router-state-serializer';
import { AsyncLocalStorageEngine, storagePluginOptions } from './storage-engine';

@NgModule({
  imports: [
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }),
    NgxsAsyncStoragePluginModule.forRoot(AsyncLocalStorageEngine, storagePluginOptions),
    NgxsRouterPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  exports: [
    NgxsModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
})
export class AppStoreModule {}
