import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

const routes: Routes = [
  {
    'path':'notes',
    'component':NotesListComponent
  },
  {
    'path':'notes/add',
    'component':AddNoteComponent
  },
  {
    'path':'notes/edit/:id',
    'component':EditNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
