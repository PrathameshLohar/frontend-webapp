import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Note } from '../models/note.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseApiUrl= 'https://localhost:7066';

  constructor(private http: HttpClient) { }


  getAllNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.baseApiUrl + '/api/notes');

  }

  addNote(addNoteRequest:Note): Observable<Note>{
    addNoteRequest.id= '00000000-0000-0000-0000-000000000000';
    return this.http.post<Note>(this.baseApiUrl + '/api/notes',
    addNoteRequest);
  }

  getNote(id: string): Observable<Note>{
    return this.http.get<Note>(this.baseApiUrl + '/api/notes/' + id);
  }

  updateNote(id:string, updateNoteRequest: Note):Observable<Note>{
    return this.http.put<Note>(this.baseApiUrl+ '/api/notes/' + id, updateNoteRequest);
  }

  deleteNote(id: string):Observable<Note>{
    return this.http.delete<Note>(this.baseApiUrl+ '/api/notes/' + id);
  }
}
