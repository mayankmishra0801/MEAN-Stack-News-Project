import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  signupForm! : FormGroup;
  message:string = "";
  className = 'd-none'
  isProcess:boolean = false;
  router: any;
  constructor(private fb:FormBuilder, private auth:AuthService){

   this.signupForm = this.fb.group({
    'displayName':['',Validators.required,Validators.minLength(3)],
     'email':['',Validators.required],
     'password':['',Validators.required],
     'mobileNumber' :['',Validators.required],
    'companyName' : ['',Validators.required]
   })
  }

  ngOnInit(): void {

  }

  signup(){

    this.isProcess = true;
     const data = this.signupForm.value;
    delete data['confirm']
     this.auth.signup(data).subscribe(res=>{
      // alert("User Register Successful")
    if(res.success){
      // this.router.navigate(['/login'])
      this.isProcess = false;

       this.message = "Account has been created";
       this.className = 'alert alert-success'

      }else{
        this.isProcess = false;
        this.message = res.message;
        this.className = 'alert alert-danger'
      }

      this.signupForm.reset();
     },err =>{
      // alert(err)

      this.isProcess = false;
        this.message = 'Server error !! ';
        this.className = 'alert alert-danger'
     }

     )


    // alert("Account Created")
  }


}
