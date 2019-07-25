import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostServiceService } from 'src/app/service/post-service.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  constructor(private postservice: PostServiceService) { }

  ngOnInit() {
   
  }

}
