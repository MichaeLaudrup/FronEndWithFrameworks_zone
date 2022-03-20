import { Component, OnInit } from '@angular/core';
import { OutletContext, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-carrousel-hojas',
  templateUrl: './carrousel-hojas.component.html',
  styleUrls: ['./carrousel-hojas.component.scss'],
  animations: [
  ]
})
export class CarrouselHojasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] 
  }

}
