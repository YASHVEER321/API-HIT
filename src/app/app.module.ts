import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {GlobalService} from './global-service.service'//For GlobalService 
import { AppComponent } from './app.component';
import { AppComponent2 } from './component2';
import { AppComponent3 } from './component3';
import {AppRoutingModule} from './routeFile'
import {ButtonModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    AppComponent3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
