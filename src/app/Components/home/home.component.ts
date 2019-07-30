import { Component, OnInit } from '@angular/core';
//<import {
  //faLightbulb as faSolidLightbulb,
  //IconDefinition
//}> from "@fortawesome/free-solid-svg-icons";

//import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";
import { ThemeService } from "src/app/theme/theme.service";
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import {MessageService} from 'src/app/service/message.service';
//import {Message} from 'src/app/model/message.model';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/model/comment';
import { Router } from '@angular/router';

import { Report } from 'src/app/model/report';
import { ReportService } from 'src/app/service/report.service';
import { ReportType } from 'src/app/model/report-type';
import { Reaction } from 'src/app/model/reaction';
import { ReactionService } from 'src/app/service/reaction.service';
import { ReactionId } from 'src/app/model/reaction-id';
import { ReactionType } from 'src/app/model/reaction-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  posts: Post[]=[];
  filteredPosts: Post[] = [];
  post: Post=new Post();
  newpost: Post = new Post();
  newcomment: Comment = new Comment();
  comments: Comment[] = [];
  showComment: boolean = false;
  showComment1: boolean = false;
  
  reactions: Reaction[] = [];
  newreaction: Reaction = new Reaction();
  newReport:Report = new Report();

  searchText: string = '';
  imgUploadStr:string = '';
  loggedUser: User = new User();
  theWeather: [];
  x:User = JSON.parse(localStorage.getItem('currentUser'));
  i: number = 0;
  imageSrc: string = '';
  size = 16;
  //faLightbulb: IconDefinition;


  constructor(private themeService: ThemeService, private userService: UserService, private postService: PostService, private messageService: MessageService, private commentService: CommentService,  private reportService: ReportService, private reactionService: ReactionService, private router: Router) { 
    console.log('in user service constructor')
  }

  ngOnInit() {
    //this.setLightbulb();
    this.getUsers();
    this.getPosts();
    this.getComments();
    this.getweather();
    //this.getReactions();
    
  }

  toggleComment(post: Post) {

    this.showComment1 = !this.showComment1;
    console.log(this.showComment1+""+ (this.i)++);
  }
  getUsers(){
    this.userService.getUsers().subscribe(
      resp => {
        if(resp != null){
          this.users = resp;
          console.log(this.users);
        }
        else {
          alert("Try again");
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
          this.filteredPosts = resp;
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
    if (this.newpost.body != ''){

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
              
    )} else {
      alert("Try again");
  
    }
  }

  refresh(){
    if(this.searchText == '')  this.filteredPosts = this.posts;
  }

  filterPosts(){
    this.filteredPosts = this.posts.filter(it => {
      console.log('In filter post');
      
      this.searchText = this.searchText.toLowerCase();
      let test =  it.body.toLowerCase().includes(this.searchText);
      
      console.log(it.body + test);
      console.log(this.searchText);

      return test ;
     
    });
  }

  // setLightbulb() {
  //   if (this.themeService.isDarkTheme()) {
  //     this.faLightbulb = faRegularLightbulb;
  //   } else {
  //     this.faLightbulb = faSolidLightbulb;
  //   }
  // }

  toggleTheme() { 
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    //this.setLightbulb();

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
  addReport(post: Post) {
    console.log(this.newReport);
    this.newReport.post= post;
    //this.newcomment.userId=this.loggedUser;
    this.newReport.reporter=this.x;
   
  

    // this.newReport.reportType={reportTypeId:1,reportType:1};
    // this.newReport.reportType.reportType=1;
    

    this.reportService.addReport(this.newReport).subscribe(
      resp => {
        console.log(resp);
        location.reload();
        
      }, error => {
        console.log('failed at report');
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
  logout() {
    localStorage.removeItem('currentUser');
    console.log(localStorage.length);
    this.router.navigate(['/login']);

  }
  uploadImage() {
    //need to grab
    console.log("image");
    console.log(this.imgUploadStr);
    let luser = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(luser);
    luser.image = this.imgUploadStr;
    console.log(luser);
    //removed resp
    this.userService.uploadImage(luser).subscribe(
      resp => {
        console.log(resp);
        localStorage.setItem('currentUser', JSON.stringify(resp));
        console.log("check lclsttrge after upload");
        console.log(localStorage);
        location.reload();
        //this.router.navigate(['/homepage']);
      },
      error => {
        console.log('failed at registering');
      }
      )
  }

// getReactions (){
//   console.log(" Attempting to add a reaction!")
//   this.reactionService.getReactions().subscribe(

//   )
// }
addReaction( post: Post){
  console.log(" Attempting to add a reaction!");

   let react = new Reaction();
    let type = new ReactionType();
   let reactId = new ReactionId();
   console.log("franklin read this!!!!!!!!!!!!");
  console.log(post);
  reactId.postId=post.postId;
  reactId.userId = this.x.userId;
  type.reactionTypeId=1;
  type.reactionType='Like';
  react.reactionType=type;
  // react.reactionType.reactionTypeId = 1;
  // react.reactionType.reactionType = "Like"; 
  react.reactionId = reactId;
  console.log("franklin read this");
  console.log(react);
  console.log("franklin read this");
  this.reactionService.addReaction(react).subscribe(
    
    resp => {
      console.log(resp);
    }

  )

  //thiss.n
}
addReaction1( post: Post){
  console.log(" Attempting to add a reaction!");

   let react = new Reaction();
    let type = new ReactionType();
   let reactId = new ReactionId();
   console.log("franklin read this!!!!!!!!!!!!");
  console.log(post);
  reactId.postId=post.postId;
  reactId.userId = this.x.userId;
  type.reactionTypeId=2;
  type.reactionType='Dislike';
  react.reactionType=type;
  // react.reactionType.reactionTypeId = 1;
  // react.reactionType.reactionType = "Like"; 
  react.reactionId = reactId;
  console.log("franklin read this");
  console.log(react);
  console.log("franklin read this");
  this.reactionService.addReaction(react).subscribe(
    
    resp => {
      console.log(resp);
    }

  )

  //thiss.n
}
addReaction2( post: Post){
  console.log(" Attempting to add a reaction!");

   let react = new Reaction();
    let type = new ReactionType();
   let reactId = new ReactionId();
   console.log("franklin read this!!!!!!!!!!!!");
  console.log(post);
  reactId.postId=post.postId;
  reactId.userId = this.x.userId;
  type.reactionTypeId=3;
  type.reactionType='Love';
  react.reactionType=type;
  // react.reactionType.reactionTypeId = 1;
  // react.reactionType.reactionType = "Like"; 
  react.reactionId = reactId;
  console.log("franklin read this");
  console.log(react);
  console.log("franklin read this");
  this.reactionService.addReaction(react).subscribe(
    
    resp => {
      console.log(resp);
    }

  )

  //thiss.n
}

}