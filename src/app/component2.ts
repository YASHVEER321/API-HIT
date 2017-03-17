import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {GlobalService} from './global-service.service'

@Component({
  selector: 'app2-root',
  template:'{{response}} This Is Your Home Page <br>  Hit API <button pButton type="button"  label="Click"></button>'
})
export class AppComponent2 implements OnInit {
  title = ' '
 
     userId:any;
  response:any;
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
    let url="https://lensclues.sia.co.in/cart/gettocartbyuserid/5886da7adbde75173bfb0eb0";
    this.globalService.GetRequest(url).subscribe(data=>{
      console.log(data[0],"Data from Cart",data[0].json.data.cartTotal);
      this.response=data[0].json.data.cartTotal;
      console.log(this.response,'ravindra')
    })
  }

}
