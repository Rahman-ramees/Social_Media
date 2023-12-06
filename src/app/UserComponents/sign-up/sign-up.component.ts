import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  responsefrombck:any

  myForm:FormGroup;

  constructor(private formBldr:FormBuilder,private http:HttpClient,private router: Router){
    this.myForm = this.formBldr.group({
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const userName = this.myForm.get('firstname')
    const userEmail = this.myForm.get('email')
    const userPass = this.myForm.get('password')
    const postData = {
      email: userEmail?.value,
      password: userPass?.value,
      username: userName?.value
    };
    if (userName && userEmail && userPass) {
      this.http.post('http://localhost:3008/register',postData).subscribe((response)=>{
        this.responsefrombck = response
        console.log('Signup successful',response);
        // this.router.navigate(['/home'])
        this.router.navigate(['/login']);
      })
    } else {
      console.log('Signup not successful:', this.responsefrombck);
    }
  }
}
