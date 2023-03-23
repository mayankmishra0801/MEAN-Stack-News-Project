import { Component } from '@angular/core';
import { DashService } from 'src/app/service/dash.service';
// import {ServiceService} from '../service.service';
import { FooterComponent } from 'src/app/include/footer/footer.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  newsList: any[] = [];
  query='';
  articless=[];

  constructor(public link:DashService,){}

  ngOnInit():void{
    // this.fb.allDatalogin();

    this.link.getNews().subscribe((result)=>{
      console.log(result)
      this.newsList = result.response
    })
  }

  search(){
    this.link.searchnews(this.query).subscribe(res=>{
      console.log(res)
      this.newsList = res.response
    })
  }


}
