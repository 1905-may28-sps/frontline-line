import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { Post } from '../app/model/post';
import { PostService } from './service/post.service';
import { HomeComponent } from './Components/home/home.component';
import { UserService } from './service/user.service';
import { PostSearchPipe } from './Pipe/post-search.pipe';


@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostSearchPipe,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
