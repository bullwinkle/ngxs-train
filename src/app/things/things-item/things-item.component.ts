import { Component, Input, OnInit } from '@angular/core';
import { ThingModel } from '../models/thing.model';

@Component({
  selector: 'app-things-item',
  templateUrl: './things-item.component.html',
  styleUrls: ['./things-item.component.scss']
})
export class ThingsItemComponent implements OnInit {

  @Input() thing: ThingModel;

  constructor() { }

  ngOnInit() {
  }

}
