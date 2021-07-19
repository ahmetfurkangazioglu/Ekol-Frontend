import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
 
  }

  deneme() {
    $('.slider').slick({
      speed: 300,
      slidesToShow: 1,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      arrows: true,
      fade: true,

    });
    
  }
}
