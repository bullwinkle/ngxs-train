import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { BlogRoutingModule } from './blog.routing';

@NgModule({
  declarations: [
    BlogPageComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ],
})
export class BlogModule {}
