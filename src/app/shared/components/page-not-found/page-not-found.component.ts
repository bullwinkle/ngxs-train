import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {

  homeUrl: Observable<string>;

  constructor (private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.homeUrl = this.route.data.pipe(map(({ home = '/' }: { home?: string } = {}) => home));
  }

}
