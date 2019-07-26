import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import {MessageService} from 'src/app/service/message.service';
import {Message} from 'src/app/model/message.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  posts: Post[]=[];
  post: Post=new Post();

  searchText: string = '';

  imageSrc = ''

  constructor(private userService: UserService, private postService: PostService, private messageService: MessageService) { 
    console.log('in user service constructor')
  }

  ngOnInit() {
    this.getUsers();
    this.getPosts();
    //this.getMessages();
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

  addPost(){
    console.log(this.post);
    this.postService.addPost(this.post).subscribe(
      resp=>{
        console.log(resp);
        this.posts.push(resp);
        this.post=new Post();
      },
      error=>{
        console.log('failed at post');
      }
    )
  }

  filterPosts(){
    this.posts = this.posts.filter(it => {
      console.log('In filter post');
      this.searchText = this.searchText.toLowerCase();
      let test =  it.body.toLowerCase().includes(this.searchText);
      console.log(it.body + test);
      console.log(this.searchText);
      return test ;
    });
  }

//   getMessages (){
//   this.messageService.getMessages().subscribe(
//     resp => {
//       if(resp != null){
//         console.log(resp);
//         this.messages = resp;
//       }
//       else{
//         console.log('Error loading message, null value sent back')
//       }
//     },
//     error => console.log('something unexpected happened')
//   );
// }

// addMessage(){
//     console.log("In adding a message");
//     console.log(this.message);
//     this.messageService.addMessage(this.message).subscribe(
//       resp=>{
//         console.log(resp);
//         this.messages.push(resp);
//         this.message=new Message();
//       },
//       error=>{
//         console.log('failed at post');
//       }


//     )
//   }
  }
