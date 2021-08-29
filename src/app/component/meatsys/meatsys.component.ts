import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meatsys',
  templateUrl: './meatsys.component.html',
  styleUrls: ['./meatsys.component.scss']
})
export class MeatsysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function(scroll:any) {
      scroll = $(window).scrollTop();
     $("#js-hero img").css({
       width: (100 + scroll/5) + "%"
     })
   })
  }

}
