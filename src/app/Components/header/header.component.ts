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

  loggedUser: User = new User();
 

  constructor(private userService: UserService) { }

  ngOnInit() {
   
  }
// is this the info that the user put in or server returned, how would we use this throughout the site
  postLogin() {
    this.userService.postLogin(this.loggedUser).subscribe(
   
      resp => {
        console.log(resp);
        if (resp != null) {
          ;
          this.loggedUser = resp;
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





}
