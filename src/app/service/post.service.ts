import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8081/Project2/post';
  reqOptions = {

    headers: new HttpHeaders({'Content-Type' : 'application/json'}) 

  };

  public getPosts(){
    return this.http.get<Post[]>(this.url);
  }

  public addPost(post: Post){
    var d=new Date();
    post.timestamp=d.toDateString();

    // this.reqOptions.headers.append('test', 'test'); //if you have more headers
 
     return this.http.post<Post>(`${this.url}`, post, this.reqOptions );
 
   }

}
