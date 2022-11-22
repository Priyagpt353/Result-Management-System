import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  url = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get(this.url);
  }

  addResult(student: Student){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    console.log(student);

    let response = this.http.post<any>(this.url, student, {headers}).subscribe(data => {
      console.log(data);
    });
    console.log(response);
  }

  updateResult(student: Student){
    const headers = new HttpHeaders().set('content-type','application/json');
    let response = this.http.put(this.url+"/"+student.id, student, {headers}).subscribe();
    console.log(response);
    
  }

  deleteResult(id: string | undefined){
    let response = this.http.delete<any>(this.url+"/"+id);
    console.log(response);
    return response;
  }

  getResult(id:string){
    return this.http.get<Student>(this.url+"/"+id);
  }

}
