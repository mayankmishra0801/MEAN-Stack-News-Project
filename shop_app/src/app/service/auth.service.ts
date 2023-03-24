import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isLoggedIn:boolean=false;
  constructor(private http:HttpClient) { }

  // isLoggedIn(){
  //     return localStorage.getItem('token');


  // }

  signup(data:any):Observable<any>{
   return this.http.post('http://localhost:8080/auth/register',data)
  }

  signin(data:any):Observable<any>{


    return this.http.post('http://localhost:8080/auth/login',data)
  }

  getProfile():Observable<any>{
    const headers = {
      'Authorization' : "Bearer" + localStorage.getItem('token')
    }

    // function setCookie(cname, cvalue, exdays) {
    //   const d = new Date();
    //   d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //   let expires = "expires="+ d.toUTCString();
    //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }

    return this.http.get('http://localhost:8080/auth/profile',{headers:headers});

  }
}
