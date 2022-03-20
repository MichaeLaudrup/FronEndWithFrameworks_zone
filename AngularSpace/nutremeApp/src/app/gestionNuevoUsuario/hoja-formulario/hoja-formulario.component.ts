

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const ESTILO_COMUN = './hoja-formulario.component.scss'; 

class hojaFormularioAbstracta {
  constructor( private navegador:Router){

  } 
  
  navigateTo(){
    //this.navegador.navigate('')
  }
}

@Component({
  selector: 'app-hoja-formulario',
  templateUrl: './hoja_SeleccionObjetivo.component.html',
  styleUrls: [ESTILO_COMUN]
})
export class HojaSeleccionObjetivo extends hojaFormularioAbstracta {
  constructor( navegador:Router){
    super(navegador)
  } 
}

@Component({
  selector: 'app-hoja-formulario2',
  templateUrl: './hoja_MetabolismoBasal_IMC.component.html',
  styleUrls: [ESTILO_COMUN]
})
export class HojaMBC_IMC extends hojaFormularioAbstracta  {
  constructor( navegador:Router){
    super(navegador)
  } 
}
