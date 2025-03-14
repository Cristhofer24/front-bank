import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API ='http://localhost:8080/api/user';

  constructor(private http :HttpClient) { }

  createUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.API}/crear`,user);
  }

  Login(username: string, password: string):Observable<any>{
    return this.http.post(`${this.API}/login`,{username,password});
  }

}
