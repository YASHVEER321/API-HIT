import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {GlobalService} from './global-service.service'

@Component({
  selector: 'app2-root',
  template:`This Is Your Home Page <br>  Hit API Using ngOnInit Method<br>
  This is API Data <br><br>& status is:&nbsp;<input type="text" *ngIf="id!=58ccd35b27cee6d07dd3e573" pInputText [(ngModel)]="status"/>
   <br>cratedDate is:&nbsp;<input type="text" pInputText [(ngModel)]="cratedDate"/><br>
  &nbsp;id is:&nbsp;<input type="text" pInputText [(ngModel)]="id"/>
  `
})
export class AppComponent2 implements OnInit {
  title = ' ';
  userId:any;
  response:any;
  status:any;
  id:any;
  cratedDate:any
  constructor(private a:ActivatedRoute,private globalService:GlobalService){
   
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.function1();
  }
  // userId:any;
  // response:any;
  // constructor(private a:ActivatedRoute,private globalService:GlobalService){
  //   this.a.params.subscribe((params: Params) => {
  //       this.userId = params['id'];
  //       console.log("Hello new",this.userId);
  //     });
  // }
  function1(){
    let url="https://lensclues.sia.co.in/cms/aboutus";
    this.globalService.GetRequest(url).subscribe(data=>{
      //console.log(data[0],"Data from Cart",data[0].json.data.cartTotal);
      this.response="";
      this.cratedDate=data[0].json.Data.createdAt;
      this.status=data[0].json.Data.status;
      this.id=data[0].json.Data._id;
      console.log(this.response,'Yash')
    })
  }

}
