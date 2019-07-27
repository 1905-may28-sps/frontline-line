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
 loggedUser: User = new User();
constructor(private userService: UserService) { }

  ngOnInit() {
  }
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