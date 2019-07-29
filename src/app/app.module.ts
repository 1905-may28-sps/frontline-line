import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
//import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
=======
import { AppRoutingModule, routingComponents } from './app-routing.module';
//mport { AngularFontAwesomeModule } from 'angular-font-awesome';
>>>>>>> origin/v3
import { ThemeModule } from "./theme/theme.module";
import { UserService } from './service/user.service';
import { Post } from './model/post';
import { PostService } from './service/post.service';
<<<<<<< HEAD
=======
import { PostSearchPipe } from './Pipe/post-search.pipe';

>>>>>>> origin/v3



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    //FooterComponent,
    HomeComponent,
=======
    routingComponents,
    //HeaderComponent,
    //FooterComponent,
    //HomeComponent,
    PostSearchPipe
    
>>>>>>> origin/v3
 
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
<<<<<<< HEAD
   // AngularFontAwesomeModule,
=======
    //AngularFontAwesomeModule,
>>>>>>> origin/v3
    ThemeModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [
<<<<<<< HEAD

    UserService,
    PostService

=======
    UserService,
    PostService
>>>>>>> origin/v3
  ],
 bootstrap: [AppComponent]
})
export class AppModule { }