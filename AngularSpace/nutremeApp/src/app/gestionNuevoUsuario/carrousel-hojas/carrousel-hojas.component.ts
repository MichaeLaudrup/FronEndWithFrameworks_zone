import { Component, OnInit } from '@angular/core';
import {  ChildrenOutletContexts, RouterOutlet } from '@angular/router';
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

  constructor(private contexts:ChildrenOutletContexts) { }

  ngOnInit(): void {
  }


  prepareRoute(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']; 
  }

}
