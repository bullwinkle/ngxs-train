import { Component, OnInit } from '@angular/core';
import { PROFILE_ROUTE } from '../../../features-routes';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['../../../../shared/styles/themes/default/default.scss', './blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {

  profileUrl: string = `/${PROFILE_ROUTE.path}`;

  constructor () {
  }

  ngOnInit () {
  }

}
