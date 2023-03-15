import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  signupForm! : FormGroup;
  message:string = "";
  
  constructor(private fb:FormBuilder, private auth:AuthService){

   this.signupForm = this.fb.group({
    'displayName':['',Validators.required],
     'email':['',Validators.required],
     'password':['',Validators.required],
   })
  }

  ngOnInit(): void {

  }

  signup(){
     const data = this.signupForm.value;
    delete data['confirm']
     this.auth.signup(data).subscribe(res=>{
      alert("User Register Successful")
      this.signupForm.reset();
     },err =>{
      alert(err)
     }

     )


    // alert("Account Created")
  }


}
