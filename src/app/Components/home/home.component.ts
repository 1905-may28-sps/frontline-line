import { Component, OnInit } from '@angular/core';

import {
  faLightbulb as faSolidLightbulb,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";
import { ThemeService } from "src/app/theme/theme.service";

import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  posts: Post[]=[];
  post: Post=new Post();

  imageSrc = ''
  faLightbulb: IconDefinition;


  constructor(private themeService: ThemeService, private userService: UserService, private postService: PostService) {
    console.log('in user service constructor')
  }

  ngOnInit() {
    this.setLightbulb();
    this.getUsers();
    this.getPosts();
  }

    setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faLightbulb = faSolidLightbulb;
    }
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    this.setLightbulb();
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
  }
