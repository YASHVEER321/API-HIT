import {Routes,RouterModule} from '@angular/router'
import {ModuleWithProviders} from '@angular/core'
import {AppComponent} from './app.component'
import {AppComponent2} from './component2'
import {AppComponent3} from './component3'
// import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core'
// import { AppComponent } from './app.component';
// import { AppComponent2 } from './app.component2';
// import { homeComponent } from './app.component3';
// const appRoutes: Routes = [
//   { path: 'about',  component:AppComponent2 },
//   { path: 'home',  component:homeComponent },
// ];
//export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes)

const appRoutes:Routes=[
    {path:'compo3',component:AppComponent3},
    {path:'compo2',component:AppComponent2}
]

export const AppRoutingModule:ModuleWithProviders=RouterModule.forRoot(appRoutes);
