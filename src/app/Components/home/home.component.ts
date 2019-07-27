import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import {MessageService} from 'src/app/service/message.service';
import {Message} from 'src/app/model/message.model';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/model/comment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  posts: Post[]=[];
  post: Post=new Post();
  comments: Comment[] = [];
  newpost: Post = new Post();
  newcomment: Comment = new Comment();
  showComment: boolean = false;
  searchText: string = '';

  loggedUser: User = new User();
  theWeather: [];
  x:User = JSON.parse(localStorage.getItem('currentUser')).resp;

  imageSrc = ''

  constructor(private userService: UserService, private postService: PostService, private messageService: MessageService, private commentService: CommentService) { 
    console.log('in user service constructor')
  }

  ngOnInit() {
    this.getUsers();
    this.getPosts();
    this.getComments();
    this.getweather();
  }

  toggleComment(post: Post) {

    this.showComment = !this.showComment;
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

  posting() {
    console.log(this.newpost);
    // console.log(HeaderComponent.arguments.loggedUser);
    // this.post.user=HeaderComponent.arguments.loggedUser;
    // this.newpost.user=this.loggedUser;
    this.newpost.user=this.x;

    this.postService.addPost(this.newpost).subscribe(
      resp => {
        console.log(resp);
        this.posts.push(resp);
        this.newpost = new Post();
      },
      
      error => {
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

  getComments() {
    this.commentService.getComments().subscribe(
      resp => {
        if (resp != null) {
          this.comments = resp;
          console.log(this.comments);
        } else {
          console.log('Error loading posts, null value sent back')
        }
      },
      error => console.log('something unexpected happened')
    );
  }
  addComment(post: Post) {
    console.log(this.newcomment);
    this.newcomment.postId = post;
    console.log(this.x);
    //this.newcomment.userId=this.loggedUser;
    this.newcomment.userId=this.x;
    this.commentService.addComment(this.newcomment).subscribe(
      resp => {
        console.log(resp);
        this.comments.push(resp);
        this.newcomment = new Comment();
      }, error => {
        console.log('failed at comment');
      }

    )
  }

  postLogin() {
    this.userService.postLogin(this.loggedUser).subscribe(
   
      resp => {
        console.log(resp);
        if (resp != null) {
          this.loggedUser = resp;
          localStorage.setItem('currentUser', JSON.stringify({ resp }));
        }
        else {
          console.log("fail login")
        };
      },
      error => {
        console.log('could not find user');
      }
    )
  }
  getweather(){
    this.userService.getWeather().subscribe(
      resp => {
        if (resp != null) {
          this.theWeather = resp;
          console.log(this.theWeather);
        }
        else {
          console.log('Error loading users, null value sent back')
        }
      },
      error => console.log('something unexpected happened')
    );

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
