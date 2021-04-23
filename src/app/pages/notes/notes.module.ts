import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleListModule } from 'src/app/components/simple-list/simple-list.module';


@NgModule({
  declarations: [NotesComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    SimpleListModule
  ]
})
export class NotesModule { }
