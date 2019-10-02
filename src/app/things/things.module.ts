import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ThingsState } from './state/things.state';
import { ThingsItemComponent } from './things-item/things-item.component';
import { ThingsManagerComponent } from './things-manager/things-manager.component';
import { ThingsPageComponent } from './things-page/things-page.component';
import { ThingDetailsComponent } from './thing-details/thing-details.component';
import { ThingsService } from './things.service';


@NgModule({
  declarations: [ThingsItemComponent, ThingsManagerComponent, ThingsPageComponent, ThingDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forFeature([ThingsState]),
  ],
  exports: [
    ThingsPageComponent,
  ],
  providers: [
    ThingsService,
  ],
})
export class ThingsModule {}
