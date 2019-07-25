import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

//import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  imageSrc = ''
  regUser: User = new User();
  loggedUser: User = new User();



  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  
  postLogin() {
    console.log("loggedUser");
    console.log(this.loggedUser);
    console.log("loggedUser");
    this.userService.postLogin(this.loggedUser).subscribe(

      resp => {
        console.log(resp);
        if (resp != null) {
          
          this.loggedUser = resp;
          localStorage.setItem('currentUser', JSON.stringify({ resp }));

          //test if localstorage was created correctly
          //var x = JSON.parse(localStorage.getItem('currentUser'));
          //console.log(x.resp['userId']);
          //if (localStorage.length > 0) {
          //  console.log("local storage has somehting");
          //}
          //else console.log("nothing in localstorage");
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
  //deletes the local storage, which logs out user
  logout() {
    localStorage.removeItem('currentUser');
    console.log(localStorage.length);
  }

  registerUser() {
    console.log("registering");
    this.userService.postReg(this.regUser).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log('failed at registering');
      }
    )
  }

  }









