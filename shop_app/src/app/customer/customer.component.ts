import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
   constructor(){}

   ngOnInit(): void {
        // localStorage.setItem('username','TutorialWebsite');
        // sessionStorage.setItem('session_user',"pradeeep kumar");
        // console.log('Customer  Data: '+ localStorage.getItem('username'));
        // console.log('Customer session  Data: '+ sessionStorage.getItem('username'));

   }
}
