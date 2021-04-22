import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleListComponent, SimpleListItemComponent } from './index';

@NgModule({
  declarations: [
    SimpleListComponent,
    SimpleListItemComponent
  ],
  exports: [
    SimpleListComponent,
    SimpleListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SimpleListModule { }
