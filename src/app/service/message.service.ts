import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient){}
  url = 'http://localhost:8080/frontline/message';
  reqOptions = {

  headers: new HttpHeaders({'Content-Type' : 'application/json'}) 
  };

  public getMessages(){
    return this.http.get<Message[]>(this.url);
  }

  public addMessage(message: Message){
      // this.reqOptions.headers.append('test', 'test'); //if you have more headers
 
     return this.http.post<Message>(`${this.url}`, message, this.reqOptions );
 
   }

}
