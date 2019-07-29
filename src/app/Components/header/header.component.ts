import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router } from "@angular/router"
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
<<<<<<< HEAD
=======

//import { Router } from '@angular/router';

>>>>>>> origin/v3


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  imageSrc = ''
  regUser: User = new User();
  loggedUser: User = new User();
  posts: Post[] = [];
  newpost: Post = new Post();



<<<<<<< HEAD

  constructor(private userService: UserService, private router: Router,private postService: PostService) { }
=======
  constructor(private userService: UserService, private router: Router,private postService: PostService) { }

  ngOnInit() {
    this.displayLogInOut();
    this.getPosts();
>>>>>>> origin/v3

  ngOnInit() {
    this.displayLogInOut();
    this.getPosts();
    
  }
<<<<<<< HEAD

=======
>>>>>>> origin/v3
  postLogin() {
    this.userService.postLogin(this.loggedUser).subscribe(
      resp => {
        console.log(this.loggedUser);
        if (resp != null) {
          this.loggedUser = resp;
<<<<<<< HEAD
          //made changes here to deal with the resp issue(7/27)
          localStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
          console.log(localStorage);
          console.log("logged in checker");
          console.log(localStorage.length);
          var x = JSON.parse(localStorage.getItem('currentUser'));
          //console.log(x.resp['image']);
=======
          localStorage.setItem('currentUser', JSON.stringify({ resp }));
          console.log("logged in checker");
          console.log(localStorage.length);
          var x = JSON.parse(localStorage.getItem('currentUser'));
          console.log(x.resp['image']);
>>>>>>> origin/v3
          this.router.navigate(['/homepage']);
        }
        else {
          console.log("fail login")
          console.log(this.loggedUser);
        };
      },
      error => {
        console.log('could not find user');
        console.log(this.loggedUser);
      }
    )
  }
  //deletes the local storage, which logs out user
  logout() {
    localStorage.removeItem('currentUser');
    console.log(localStorage.length);
  }

  registerUser() {
    console.log("registering");
    //this.regUser.userId = 8;
    this.regUser.roleId = {
      roleId: 1,
      roleType: "Employee"
    };
    this.regUser.bannedId = {
      bannedId: 1,
      bannedType: "Not Banned"
    };
    this.regUser.themeId = {
      themeId: 1,
      themeType: "Default"
    };
    console.log(this.regUser);
    this.userService.postReg(this.regUser).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(this.regUser);
        console.log('failed at registering');
      }
    )
  }

  displayLogInOut() {
    if (localStorage.length == 0) {
      //show login / signup
<<<<<<< HEAD
=======

      // hide logout

    }
    else {
      //hide login signup
      //show logout
    }
  }
>>>>>>> origin/v3

      // hide logout

<<<<<<< HEAD
    }
    else {
      //hide login signup
      //show logout
    }
=======
  getPosts() {
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
>>>>>>> origin/v3
  }


  getPosts() {
    this.postService.getPosts().subscribe(
      resp => {
        if (resp != null) {
          this.posts = resp;
          console.log(this.posts);

        }
        else {
          console.log('Error loading posts, null value sent back');
        }
      },
      error => console.log('something unexpected happened')
    );
  }



  }





  } 