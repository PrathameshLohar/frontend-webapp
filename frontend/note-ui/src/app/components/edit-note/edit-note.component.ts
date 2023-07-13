import { Injectable, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})

export class EditNoteComponent implements OnInit {
  noteDetails: Note={
    id: '',
    name:'',
    description:''
  }

  constructor(private route :ActivatedRoute, private noteService: NotesService, private router: Router){}

  ngOnInit(): void {
     this.route.paramMap.subscribe({
      next: (params) =>{
        const id= params.get('id');
        if(id){
          this.noteService.getNote(id)
          .subscribe({
            next:(res)=>{
              this.noteDetails= res;

            }
          })
        }
      }
     }) 
  }

  updateNote(){
    this.noteService.updateNote(this.noteDetails.id, this.noteDetails)
    .subscribe({
      next:(resp)=>{
        this.router.navigate(['/notes'])
      }
    })
  }

  deleteNote(id:string){
    this.noteService.deleteNote(id)
    .subscribe({
      next: (resp)=>{
        this.router.navigate(['/notes'])
      }
    })
  }

}
