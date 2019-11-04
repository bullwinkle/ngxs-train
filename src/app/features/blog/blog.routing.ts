import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

const routes: Route[] = [
  {
    path: '',
    component: BlogPageComponent,
    resolve: {
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class BlogRoutingModule {}
