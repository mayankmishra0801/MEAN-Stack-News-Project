import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import {CookieService}

@Component({
  selector: 'app-cookies1',
  templateUrl: './cookies1.component.html',
  styleUrls: ['./cookies1.component.css']
})
export class Cookies1Component implements OnInit{

  constructor(private cookie: CookieService){}
  cookiebox:boolean =false;
  ngOnInit(): void {
     this.Check()
  }

  Check(){

  const checking =    this.cookie.check('data');
   if(checking){
    this.cookiebox  = false;
   }
   else{
    this.cookiebox = true;
   }


  }

  Allow(){
    this.cookie.set('data','codetodo',{expires:1})

    this.cookiebox = false;

  }

  Decline(){

    this.cookiebox = false;

  }
  Delete(){
      this.cookie.delete('data');
  }

}
