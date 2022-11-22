import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://localhost:3000/students';
  constructor(private http: HttpClient) { }

  search(rollNo:string, name:string){
    return this.http.get(this.url+"?rollNo="+rollNo+"&name="+name);
  }
}
