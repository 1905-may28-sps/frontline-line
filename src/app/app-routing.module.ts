import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
=======
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
>>>>>>> origin/v3

const routes: Routes = [
  { path: 'login',component: HeaderComponent },
  {path: 'homepage', component: HomeComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, HomeComponent]