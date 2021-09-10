import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sentez',
  templateUrl: './sentez.component.html',
  styleUrls: ['./sentez.component.scss']
})
export class SentezComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".acordeon").on("click", ".acordeon-cabecera", function() {
      $(this).toggleClass("active").next().slideToggle();
    });
    
  }

}
