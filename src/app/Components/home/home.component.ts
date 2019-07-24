import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  posts: Post[]=[];

  imageSrc = ''

  constructor(private userService: UserService, private postService: PostService) { 
    console.log('in user service constructor')
  }

  ngOnInit() {
    this.getUsers();
    this.getPosts();
  }
  getUsers(){
    this.userService.getUsers().subscribe(
      resp => {
        if(resp != null){
          this.users = resp;
          console.log(this.users);
        }
        else{
          console.log('Error loading users, null value sent back')
        }
      },
      error => console.log('something unexpected happened')
    );
  }


  getPosts(){
    this.postService.getPosts().subscribe(
      resp => {
        if(resp != null){
          this.posts = resp;
          console.log(this.posts);
        }
        else{
          console.log('Error loading posts, null value sent back')
        }
      },
      error => console.log('something unexpected happened')
    );
  }
}
