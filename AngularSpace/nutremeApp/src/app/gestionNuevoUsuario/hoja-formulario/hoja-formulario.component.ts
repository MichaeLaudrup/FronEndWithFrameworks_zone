

import { Component, OnInit } from '@angular/core';
const ESTILO_COMUN = './hoja-formulario.component.scss'; 

abstract class hojaFormularioAbstracta {
  //COSAS COMUNES DE TODOS LOS COMPONENTES
}

@Component({
  selector: 'app-hoja-formulario',
  templateUrl: './hoja_SeleccionObjetivo.component.html',
  styleUrls: [ESTILO_COMUN]
})
export class HojaSeleccionObjetivo extends hojaFormularioAbstracta {

}

@Component({
  selector: 'app-hoja-formulario2',
  templateUrl: './hoja_MetabolismoBasal_IMC.component.html',
  styleUrls: [ESTILO_COMUN]
})
export class HojaMBC_IMC extends hojaFormularioAbstracta  {

}
