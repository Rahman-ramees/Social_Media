import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  constructor(private userService:UserService){}

  users:any[]=[];

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(data =>{
      this.users = data
      console.log(this.users);
    })
   
    
  }

}
