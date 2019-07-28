import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
//import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
//mport { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ThemeModule } from "./theme/theme.module";
import { UserService } from './service/user.service';
import { Post } from './model/post';
import { PostService } from './service/post.service';
import { PostSearchPipe } from './Pipe/post-search.pipe';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    //HeaderComponent,
    //FooterComponent,
    //HomeComponent,
    PostSearchPipe
    
 
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    //AngularFontAwesomeModule,
    ThemeModule,

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
