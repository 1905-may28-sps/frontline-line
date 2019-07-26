import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

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
    this.userService.postLogin(this.loggedUser).subscribe(
      resp => {
        if (resp != null) {
          this.loggedUser = resp;
          localStorage.setItem('currentUser', JSON.stringify({ resp }));
          console.log("logged in checker");
          console.log(localStorage.length);
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

  }
