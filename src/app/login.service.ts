import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  login(role: string, email: string, password: string) {
    let queryParams = new HttpParams();
    queryParams.append('role', role);
    queryParams.append('email', email);
    queryParams.append('password', password);    
    return this.http.get(this.url+"?role="+role+"&email="+email+"&password="+password);
  }
}
