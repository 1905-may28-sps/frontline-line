import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8081/Project2/comment';

  reqOptions={
    headers: new HttpHeaders({'Content-Type' : 'application/json'}) 

  };
  public getComments(){
    return this.http.get<Comment[]>(this.url);
  }
  public addComment(comment: Comment){
    var d=new Date();
    comment.timestamp=d.toDateString();
    return this.http.post<Comment>(`${this.url}`,comment,this.reqOptions);
  }
}