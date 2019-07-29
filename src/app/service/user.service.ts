import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

<<<<<<< HEAD

=======
>>>>>>> origin/v3
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient) { }


  url = 'http://localhost:8080/Project2/users';

  public getUsers(){
    return this.http.get<User[]>(this.url);
  }

  public postLogin(user: User) {

    return this.http.post<User>(`${this.url}/login`,user);
<<<<<<< HEAD
=======
  }
  public getWeather(){

    return this.http.get<[]>('http://api.openweathermap.org/data/2.5/weather?q=Manhattan,us&units=imperial&APPID=859d47520ac736ebe8bbce1fef74269c');
>>>>>>> origin/v3
  }
  public getWeather(){

    return this.http.get<[]>('http://api.openweathermap.org/data/2.5/weather?q=Manhattan,us&units=imperial&APPID=859d47520ac736ebe8bbce1fef74269c');
}


  public postReg(user: User) {
    return this.http.post<User>(`${this.url}/register`, user);

  }
  public uploadImage(user: User) {
    return this.http.post<User>(`${this.url}/register`, user)
  }

}

