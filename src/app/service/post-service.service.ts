import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private postUrl: string;


  // constructor(private http:HttpClient) {
  //   this.postUrl='http://localhost:8081/post';
  //  }
  //  public save(post:Post){
  //    return this.http.post<Post>(this.postUrl,post);
  //  }
}
