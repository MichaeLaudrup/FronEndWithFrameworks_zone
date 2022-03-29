

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
const ESTILO_COMUN = './hoja-formulario.component.scss'; 

class hojaFormularioAbstracta {
  constructor( public navegador:Router, public rutaActiva: ActivatedRoute){

  } 
  
  navigateTo(){
    this.navegador.navigate(['MBA_IMC'])
  }
}

@Component({
  selector: 'app-hoja-formulario',
  templateUrl: './hoja_SeleccionObjetivo.component.html',
  styleUrls: [ESTILO_COMUN]
})
export class HojaSeleccionObjetivo extends hojaFormularioAbstracta {
  constructor( navegador:Router , rutaActiva: ActivatedRoute){
    super(navegador, rutaActiva)
  } 

  seleccionarObjetivo( objetivo:string){
    this.navegador.navigate(['../MBA_IMC'], {relativeTo: this.rutaActiva})
  }
}

@Component({
  selector: 'app-hoja-formulario2',
  templateUrl: './hoja_MetabolismoBasal_IMC.component.html',
  styleUrls: [ESTILO_COMUN]
})
export class HojaMBC_IMC extends hojaFormularioAbstracta  {
  constructor( navegador:Router, rutaActiva: ActivatedRoute){
      super(navegador, rutaActiva)
    }
}
