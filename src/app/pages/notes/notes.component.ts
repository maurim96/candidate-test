import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from './notes.service';
import { Note } from './models';
import { Utils } from 'src/app/data-layer/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  noteForm: FormGroup;
  notes: Note[];

  get title() { return this.noteForm.get('title') }
  get content() { return this.noteForm.get('content') }

  constructor(
    private notesService: NotesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.notesService.notes$.subscribe((notes: Note[]) => this.notes = notes);
    this.buildForm();
  }

  buildForm() {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required, Validators.maxLength(120)]],
    });
  }

  createNote() {
    const newNote = {
      id: Utils.newGuid(),
      title: this.title.value,
      content: this.content.value
    } as Note;
    this.resetForm();

    this.notesService.addNote(newNote);
  }

  deleteNote(noteId: string) {
    this.notesService.removeNote(noteId);
  }

  resetForm() {
    this.noteForm.reset();
  }

  // TODO: implement note update functionality
  // updateNote(noteId: string) {
  //   const noteToUpdate = this.notes.find(n => n.id === noteId);
  //   noteToUpdate.title = this.title.value;
  //   noteToUpdate.content = this.content.value;

  //   this.notesService.updateNote(noteToUpdate);
  // }
}
