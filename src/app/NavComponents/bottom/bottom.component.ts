import { Component } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {

  constructor(private postService:PostService){}
  
  addPost(){
    const postData ={
      imageLinks: './../../../assets/Images/postimg.jpg',
      description: 'this is the new post',
      userId: '1',
    }
    this.postService.addPost(postData).subscribe(
      (response) => { 
        console.log('post added successfully', response);
        
    },
    (error) => {
      console.log('error while adding post',error);
      
    }
    )
  }
}
