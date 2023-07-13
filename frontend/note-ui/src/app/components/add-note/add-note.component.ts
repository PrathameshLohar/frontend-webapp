import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  addNoteRequest: Note={
    id: '',
    name:'',
    description:''
  }
  constructor(private noteService: NotesService, private router: Router){

  }

  ngOnInit(): void {
      
  }
  addNote(){
    // console.log(this.addNoteRequest);
    this.noteService.addNote(this.addNoteRequest)
    .subscribe({
      next: (note)=>{
        // console.log(note);
        this.router.navigate(['/notes'])
      }
    })
  }

}
