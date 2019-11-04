import { Component, OnInit } from '@angular/core';
import { FEATURES_CONFIG } from '../../../../features-config';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {

  profileUrl: string = `/${FEATURES_CONFIG.profile.url}`;

  constructor () {
  }

  ngOnInit () {
  }

}
