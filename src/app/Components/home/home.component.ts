import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

// import {
//   faLightbulb as faSolidLightbulb,
//   IconDefinition
// } from "@fortawesome/free-solid-svg-icons";
// import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";
=======
//<import {
  //faLightbulb as faSolidLightbulb,
  //IconDefinition
//}> from "@fortawesome/free-solid-svg-icons";

//import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";
>>>>>>> origin/v3
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

<<<<<<< HEAD
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/model/comment';
import { Report } from 'src/app/model/report';
import { ReportService } from 'src/app/service/report.service';
import { ReportType } from 'src/app/model/report-type';



// import {MessageService} from 'src/app/service/message.service';
// import {Message} from 'src/app/model/message.model';


=======
import { Report } from 'src/app/model/report';
import { ReportService } from 'src/app/service/report.service';
import { ReportType } from 'src/app/model/report-type';
>>>>>>> v4

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
<<<<<<< HEAD

  posts: Post[] = [];
  comments: Comment[] = [];
  newpost: Post = new Post();
  newcomment: Comment = new Comment();
  showComment: boolean = false;
  showComment1: boolean = false;
  //clicked = false;
  newReport:Report = new Report();
 
  loggedUser: User = new User();
  theWeather: [];
  x:User = JSON.parse(localStorage.getItem('currentUser'));
i:number=0;

=======
  posts: Post[]=[];
  filteredPosts: Post[] = [];
>>>>>>> v4
  post: Post=new Post();
<<<<<<< HEAD

  searchText: string = '';


  imageSrc = '';

// faLightbulb: IconDefinition;

  constructor( private themeService: ThemeService, private userService: UserService, private postService: PostService, private commentService: CommentService, private reportService: ReportService) {

=======
  comments: Comment[] = [];
  newpost: Post = new Post();
  newcomment: Comment = new Comment();
  showComment: boolean = false;
  showComment1: boolean = false;
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


<<<<<<< HEAD
  constructor(private themeService: ThemeService, private userService: UserService, private postService: PostService, private messageService: MessageService, private commentService: CommentService, private router: Router) { 
>>>>>>> origin/v3
=======
  constructor(private themeService: ThemeService, private userService: UserService, private postService: PostService, private messageService: MessageService, private commentService: CommentService,  private reportService: ReportService, private router: Router) { 
>>>>>>> v4
    console.log('in user service constructor')
  }

  ngOnInit() {
<<<<<<< HEAD
    // this.setLightbulb();
    this.getUsers();
    this.getPosts();

=======
    //this.setLightbulb();
    this.getUsers();
    this.getPosts();
>>>>>>> origin/v3
    this.getComments();
    this.getweather();
  }

  toggleComment(post: Post) {
<<<<<<< HEAD

    this.showComment1 = !this.showComment1;
    console.log(this.showComment1+""+ (this.i)++);
  }

 

  //   setLightbulb() {
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
// this.setLightbulb();
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
        
      }, error => {
        console.log('failed at report');
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

   
    getUsers(){
      this.userService.getUsers().subscribe(
        resp => {
          if (resp != null) {
            this.users = resp;
            console.log(this.users);
          }
          else {
            console.log('Error loading users, null value sent back')
          }
        },
        error => console.log('something unexpected happened')
      );
    }


    getPosts(){
      this.postService.getPosts().subscribe(
        resp => {
          if (resp != null) {
            this.posts = resp;
            console.log(this.posts);
          }
          else {
            console.log('Error loading posts, null value sent back')
          }
        },
        error => console.log('something unexpected happened')
      );
    }

    addPost(){
      console.log(this.post);
      this.postService.addPost(this.post).subscribe(
        resp => {
          console.log(resp);
          this.posts.push(resp);
          this.post = new Post();
        },
        error => {
          console.log('failed at post');
        }
      )
    }
  
=======

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
      alert("Try again")
  
    }
  }

  refresh(){
    if(this.searchText == '')  this.filteredPosts = this.posts;
  }
>>>>>>> origin/v3

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
<<<<<<< HEAD
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
 

=======

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



<<<<<<< HEAD
}
>>>>>>> origin/v3
=======

}
>>>>>>> v4
