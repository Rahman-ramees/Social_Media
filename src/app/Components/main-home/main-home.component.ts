import { Component } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent {

  commentbx = false
  postCommentTxt = ''

  constructor(){}
  Users = [
    {
      image:'./../assets/Images/hilite',
      Name:'Sayan_th@'
    },{
      image:'./../assets/Images/hilite',
      Name:'Favas_ktni'
    },{
      image:'./../assets/Images/hilite',
      Name:'Anshed!!!!'
    },{
      image:'./../assets/Images/hilite',
      Name:'Rahman'
    },{
      image:'./../assets/Images/hilite',
      Name:'Suluuu'
    },{
      image:'./../assets/Images/hilite',
      Name:'Rolex'
    },{
      image:'./../assets/Images/hilite',
      Name:'Dhilli'
    },{
      image:'./../assets/Images/hilite',
      Name:'Alluuu'
    }
  ]

  openComentbx(){
    this.commentbx = true
  }
  postComment(){
    console.log(this.postCommentTxt);
  }

  
  
}
