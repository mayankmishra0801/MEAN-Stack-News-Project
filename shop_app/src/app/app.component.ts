import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop_app';

  constructor(private cookie:CookieService){

  }

  SetCookie(){
    this.cookie.set("userId","adminuser");
    this.cookie.set("username","ramesh");
  }

  GetCookie(){
     console.log(this.cookie.get("username"));
  }

  removeCookie(){
     this.cookie.delete("username")
  }
  removeallCookie(){
        this.cookie.deleteAll();
  }

}
