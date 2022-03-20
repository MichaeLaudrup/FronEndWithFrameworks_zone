import { Component, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { fader } from 'src/app/animaciones/route.animations';
@Component({
  selector: 'app-carrousel-hojas',
  templateUrl: './carrousel-hojas.component.html',
  styleUrls: ['./carrousel-hojas.component.scss'],
  animations: [
    fader
  ]
})
export class CarrouselHojasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData; 
  }

}
