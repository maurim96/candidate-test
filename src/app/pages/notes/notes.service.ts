import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from './models';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Note[];
  private readonly _notes$ = new BehaviorSubject<Note[]>(null);
  notes$ = this._notes$.asObservable();

  private updateNotes(): void {
    this._notes$.next(this.notes);
  }
  constructor() {
    const notes = localStorage.getItem("notes");
     if (notes) {
       this.notes = JSON.parse(notes);
      }
     else {
       this.notes = []
      };

     this.updateNotes();
  }

  addNote(note: Note) {
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
    this.updateNotes();
  }

  removeNote(noteId: string) {
    const index = this.notes.findIndex(n => n.id === noteId);
    if (index !== -1) {
      this.notes.splice(index, 1)
      localStorage.setItem("notes", JSON.stringify(this.notes));
      this.updateNotes();
    }
  }

  // TODO: implement updateNote funcitonality and adapt NoteForm on note component
  // updateNote(note: {id: string, content: string}) {
  //   console.log(note  )
  //   const index = this.notes.findIndex(n => n.id === note.id);
  //   if (index > -1) {
  //     this.notes[index].content = note.content;
  //     localStorage.setItem("notes", JSON.stringify(this.notes));
  //     this.updateNotes();
  //   }
  // }
}
