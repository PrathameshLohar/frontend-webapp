import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  notes: Note[]=[];
  constructor(private noteService: NotesService){};

  ngOnInit():void{
    this.noteService.getAllNotes().subscribe({
      next:(notes)=>{
        // console.log(notes);
        this.notes= notes;
      },
      error:(res)=>{
        console.log(res);
      }
    })
  };

}
