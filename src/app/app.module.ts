import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AsyncStorageEngineProxy, NgxsAsyncStoragePluginModule } from '@ngxs-labs/async-storage-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppState } from './app.state';
import { SharedModule } from './shared/shared.module';

class AsyncStorageEngine extends AsyncStorageEngineProxy {
  constructor () {
    super(localStorage);
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }),
    NgxsAsyncStoragePluginModule.forRoot(AsyncStorageEngine, {
      /* Do not save 'router' state from  NgxsRouterPlugin (fix redirect to root) */
      serialize: ({ router, ...resultState }) => JSON.stringify(resultState),
      deserialize: (jsonString) => {
        const { router: _, ...resultState } = JSON.parse(jsonString);
        return resultState;
      },
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
