import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
