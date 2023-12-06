import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
 
  myForm:FormGroup
  resFromBck:any
  constructor(private fromBuilder:FormBuilder,private http:HttpClient, private router:Router){
    this.myForm = fromBuilder.group({
      email:['', Validators.required,Validators.email],
      password:['', Validators.required]
    })
  }
  

  onSubmit(){
    const userEmail = this.myForm.get('email')
    const userPass = this.myForm.get('password')

    const postData = {
      email : userEmail?.value,
      password : userPass?.value
    }

    if (userEmail && userPass) {
      this.http.post('http://localhost:3008/login',postData).subscribe((response)=>{
       this.resFromBck = response
       console.log(response);
       
      console.log('LogIn SuccessFull',this.resFromBck);
      this.router.navigate(['/home'])
      })
    }
    else{
      console.log("LogIn Failed", this.resFromBck);
    }

  }
}
