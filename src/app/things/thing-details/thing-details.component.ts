import { Component, Input, OnInit } from '@angular/core';
import { ThingModel } from '../models/thing.model';
import { ThingsService } from '../things.service';

@Component({
  selector: 'app-thing-details',
  templateUrl: './thing-details.component.html',
  styleUrls: ['./thing-details.component.scss'],
})
export class ThingDetailsComponent implements OnInit {
  @Input() thing: ThingModel;
  @Input() readonly = false;

  constructor (public thingsService: ThingsService) {
  }

  ngOnInit () {
  }
}
