import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const sharedDeclarations = [
  PageNotFoundComponent,
];

@NgModule({
  declarations: [
    ...sharedDeclarations,
  ],
  imports: [
    RouterModule,
    ...sharedModules,
  ],
  exports: [
    ...sharedModules,
    ...sharedDeclarations,
  ],
})
export class SharedModule {}
