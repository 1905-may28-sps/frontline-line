import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8081/Project2/users';

  public getUsers(){
    return this.http.get<User[]>(this.url);
  }

  public postLogin(user: User) {
    return this.http.post<User>(`${this.url}/login`, user);
  }

  public postReg(user: User) {
    return this.http.post<User>(`${this.url}/register`, user);
  }

}
