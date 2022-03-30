import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-datos-nutricionales',
  templateUrl: './panel-datos-nutricionales.component.html',
  styleUrls: ['./panel-datos-nutricionales.component.scss']
})
export class PanelDatosNutricionalesComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  openPanel( panel:HTMLElement, contenedor: HTMLElement): void {
    panel.classList.toggle('panel-opened'); 
    contenedor.classList.toggle('component-opened')
  }

}
