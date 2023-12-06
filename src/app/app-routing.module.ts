import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './Components/chat/chat.component';
import { LikesComponent } from './Components/likes/likes.component';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { BottomComponent } from './NavComponents/bottom/bottom.component';
import { SignUpComponent } from './UserComponents/sign-up/sign-up.component';
import { LogInComponent } from './UserComponents/log-in/log-in.component';

const routes: Routes = [
  {
    path:'',
    component:SignUpComponent
  },{
    path:'signup',
    component:SignUpComponent
  },{
    path:'login',
    component:LogInComponent
  },{
    path:'home',
    component:MainHomeComponent
  },{
    path:'chat',
    component:ChatComponent
  },{
    path:'likes',
    component:LikesComponent
  },{
    path:'bottomnav',
    component:BottomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
