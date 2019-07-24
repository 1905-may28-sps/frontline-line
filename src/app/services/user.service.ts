import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user.model'
 
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:8081/bank-app/users';

  public getUsers(){
    return this.http.get<User[]>(this.url);
  }
}
