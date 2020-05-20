import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm:FormGroup;
  userId:string="";
  password:string="";
  userInvaid:boolean = false;
  constructor(private router: Router, private formBuilder:FormBuilder) { 
      this.signInForm = formBuilder.group(
        {
          u_Id: ['', Validators.required],
          pass: ['', Validators.required]
        }
      );

  }

  ngOnInit(): void {
  }

  login(signInForm:any){
    console.log("signInForm controls", signInForm.controls);
    
    this.userId = signInForm.controls.u_Id.value;
    this.password = signInForm.controls.pass.value;
    
    if (this.userId =='Bhanu' && this.password == 'Bhanu@123'){
      this.router.navigate(['/dashboard']);
    } else{
      // alert('Wrong Username and Password');
      this.userInvaid = true;
    }
    
  }
}
