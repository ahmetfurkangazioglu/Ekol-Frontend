import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';

import { HomePageComponent } from './component/home-page/home-page.component';
import { HomePage2Component } from './component/home-page2/home-page2.component';
import { MeatsysComponent } from './component/meatsys/meatsys.component';
import { SentezComponent } from './component/sentez/sentez.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomePage2Component},
  {path:"home",component:HomePageComponent},
  {path:"contact",component:ContactComponent},
  {path:"meatsys",component:MeatsysComponent},
  {path:"sentez",component:SentezComponent},
];

@NgModule({
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
