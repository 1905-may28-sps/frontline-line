import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8081/Project2/post';

  public getPosts(){
    return this.http.get<Post[]>(this.url);
  }

}
