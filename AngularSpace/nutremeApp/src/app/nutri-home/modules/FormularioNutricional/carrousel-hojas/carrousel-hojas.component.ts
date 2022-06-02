import { Component, OnInit } from '@angular/core';
import {  ChildrenOutletContexts, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-carrousel-hojas',
  templateUrl: './carrousel-hojas.component.html',
  styleUrls: ['./carrousel-hojas.component.scss'],
})
export class CarrouselHojasComponent implements OnInit {

  constructor(private contexts:ChildrenOutletContexts) { }

  ngOnInit(): void {
  }


  prepareRoute(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']; 
  }

}
