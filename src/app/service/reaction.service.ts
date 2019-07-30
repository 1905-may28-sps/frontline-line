import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reaction } from '../model/reaction';


@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:8080/frontline/react';

  reqOptions={
    headers: new HttpHeaders({'Content-Type' : 'application/json'}) 

  };

  public getReactions() {
    return this.http.get<Reaction[]>(this.url);
  }
  
  public addReaction(reaction: Reaction){
    return this.http.post<Reaction>(`${this.url}`,reaction,this.reqOptions);
  }
}
