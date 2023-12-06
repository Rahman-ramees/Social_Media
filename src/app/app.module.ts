import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './Components/chat/chat.component';
import { LikesComponent } from './Components/likes/likes.component';
import { HttpClientModule } from '@angular/common/http';
import { TopComponent } from './NavComponents/top/top.component';
import { BottomComponent } from './NavComponents/bottom/bottom.component';
import { LeftsideComponent } from './NavComponents/leftside/leftside.component';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { SignUpComponent } from './UserComponents/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './UserComponents/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { PostComponent } from './Components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LikesComponent,
    TopComponent,
    BottomComponent,
    LeftsideComponent,
    MainHomeComponent,
    SignUpComponent,
    LogInComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
