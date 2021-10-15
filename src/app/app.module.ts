import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';
import { CardsComponent } from './component/cards/cards.component';
import { GoInfoComponent } from './component/go-info/go-info.component';
import { SocialMedia2Component } from './component/social-media2/social-media2.component';
import { AboutComponent } from './component/about/about.component';
import { ReferansComponent } from './component/referans/referans.component';
import { FootersComponent } from './component/footers/footers.component';
import { ContactComponent } from './component/contact/contact.component';
import { MeatsysComponent } from './component/meatsys/meatsys.component';
import { SentezComponent } from './component/sentez/sentez.component';
import { ButtonComponent } from './component/button/button.component';
import { HomePage2Component } from './component/home-page2/home-page2.component';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { Card2Component } from './component/card2/card2.component';
import { ListComponent } from './component/list/list.component';
import { Contact2Component } from './component/contact2/contact2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SocialMediaComponent,
    CardsComponent,
    GoInfoComponent,
    SocialMedia2Component,
    AboutComponent,
    ReferansComponent,
    FootersComponent,
    ContactComponent,
    MeatsysComponent,
    SentezComponent,
    ButtonComponent,
    HomePage2Component,
    Navbar2Component,
    Card2Component,
    ListComponent,
    Contact2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
