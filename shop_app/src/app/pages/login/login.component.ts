import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginForm!: FormGroup

constructor(private fb:FormBuilder, private auth:AuthService, private router:Router){


  this.loginForm = this.fb.group({
    // 'displayName':['',Validators.required],
     'email':['',Validators.required],
     'password':['',Validators.required],
})
}
 ngOnInit(): void {

 }

 login(){
  //  alert("Login Successful")
  const data = this.loginForm.value;
  this.auth.signin(data).subscribe((res)=>{

    if(res.success){

      var today = new Date();
      var expire = new Date();

      expire.setTime(today.getTime() + 3600000*24*15);
      document.cookie = data.name + "=" + res.token + ";path=/" + ";expires=" + expire.toUTCString();

      localStorage.setItem('token',res.token)
      this.auth.isLoggedIn=true
      // alert(res.success)

      this.router.navigate(['/dashboard'])
    }
    else{
      alert(res.message)
    }


  }, (err:any)=>{
    alert("Login Failed")
  })

}

}
