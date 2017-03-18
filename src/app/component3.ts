import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from './global-service.service'

@Component({
  selector: 'app3-root',
  template: `<h1>{{title}}<button pButton type="button" (click)="clickFunction()"  label="Click for Api"></button></h1>
            <h3 *ngIf="!status==''">status is:&nbsp;{{status}}</h3> &nbsp; <h3 *ngIf="!status==''">cratedDate is:&nbsp;{{cratedDate}}<h3>
            
  `
})
export class AppComponent3 {
  title = 'Hello This is second Route';
  userId: any;
  response: any;
  status: String="";
  id: any;
  cratedDate: any
  constructor(private a: ActivatedRoute, private global: GlobalService) {

  }
  clickFunction() {
    let url = "https://lensclues.sia.co.in/cms/aboutus";
    this.global.GetRequest(url).subscribe(data => {
      this.response = "";
      this.cratedDate = data[0].json.Data.createdAt;
      this.status = data[0].json.Data.status;
      this.id = data[0].json.Data._id;
      console.log(this.cratedDate, 'Yash')
    })
  }
}
