import { Component, OnInit } from '@angular/core';
import { ThingsService } from '../things.service';

@Component({
  selector: 'app-things-manager',
  templateUrl: './things-manager.component.html',
  styleUrls: ['./things-manager.component.scss'],
})
export class ThingsManagerComponent implements OnInit {

  constructor (public thingsService: ThingsService) {
  }

  ngOnInit () {
  }

}
