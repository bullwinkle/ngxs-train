import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RouterStateModel, RouterStateSelectors } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngxs-train';

  @Select(RouterStateSelectors.state) routerState: Observable<RouterStateModel>;
  @Select(RouterStateSelectors.url) url: Observable<string>;
  @Select(RouterStateSelectors.data) data: Observable<any>;
  @Select(RouterStateSelectors.params) params: Observable<any>;
  @Select(RouterStateSelectors.queryParams) queryParams: Observable<any>;
}
