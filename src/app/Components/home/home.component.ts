import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
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
  comments: Comment[]=[];
  post: Post=new Post();
  newcomment: Comment =new Comment();
  showComment: boolean = false;

  imageSrc = ''

  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService) { 
    console.log('in user service constructor')
  }

  ngOnInit() {
    this.getUsers();
    this.getPosts();
    this.getComments();
  }

  toggleComment(){
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

  getComments(){
    this.commentService.getComments().subscribe(
      resp=>{
        if(resp!= null){
          this.comments=resp;
          console.log(this.comments);
        }else{
          console.log('Error loading posts, null value sent back')
        }
      },
      error => console.log('something unexpected happened')
    );
      }
      addComment(post:Post){
        console.log(this.newcomment);
        this.newcomment.postId=post;
        //this.comment.userId=this.user;
        this.commentService.addComment(this.newcomment).subscribe(
          resp=>{
            console.log(resp);
            this.comments.push(resp);
            this.newcomment= new Comment();
          },error=>{
            console.log('failed at comment');
          }

        )
      }

      

 
    
  
}
