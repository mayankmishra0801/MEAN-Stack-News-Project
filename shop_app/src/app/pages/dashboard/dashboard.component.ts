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

  source: Array<any> = []

  isChecked: {[key:string]:boolean} = {};

  sourceDetails:string[]=[
    "Hindustan Times",
    "The Times of India",
    "The Indian Express",
    "NDTV News",
    "Bar & Bench - Indian Legal News"
  ]

  constructor(public link:DashService,){}

  ngOnInit():void{
    // this.fb.allDatalogin();

    this.link.getNews().subscribe((result: { response: any[]; })=>{
      console.log(result)
      this.newsList = result.response
    })
  }

  search(){
    this.link.searchnews(this.query).subscribe((res: { response: any[]; })=>{
      console.log(res)
      this.newsList = res.response
    })
  }

  filter(checkbox:any){
       if(this.isChecked[checkbox.value] == true){
        this.isChecked[checkbox.value] = false;
       }
       else{
        this.isChecked[checkbox.value] = true;
       }this.addSkill();
  }

  addSkill(){
    this.source = Object.keys(this.isChecked).filter((key)=> this.isChecked[key]);
    console.log('this',this.source);
    this.link.filternews(this.source).subscribe(resp=>{
      console.log(resp)
      this.newsList= resp.response;
    })
  }


}
