

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ignoreElements, Observable } from 'rxjs';
import { GlobalStateWithNutriApp } from 'src/app/nutri-home/store/home.reducer';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import * as nutriAppActions from '../../../store/home.actions';
import * as nutriAppSelectors from '../../../store/home.selectors'
const ESTILO_COMUN = './hoja-formulario.component.scss'; 

class hojaFormularioAbstracta {
  constructor( public navegador:Router, public rutaActiva: ActivatedRoute, public _store: Store<GlobalStateWithNutriApp>){

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
  constructor( navegador:Router , rutaActiva: ActivatedRoute, store: Store<GlobalStateWithNutriApp>){
    super(navegador,rutaActiva,store)
  } 

  seleccionarObjetivo( objetivo:string){
    this._store.dispatch(nutriAppActions.setTarget({objetivo}))
    this.navegador.navigate(['../MBA_IMC'], {relativeTo: this.rutaActiva})
  }
}

@Component({
  selector: 'app-hoja-formulario2',
  templateUrl: './hoja_MetabolismoBasal_IMC.component.html',
  styleUrls: [ESTILO_COMUN]
})
export class HojaMBC_IMC extends hojaFormularioAbstracta implements OnInit, OnDestroy  {

  datos_fisiologicos$ : Observable<FisiologicData>; 
  datosFisioForm: FormGroup; 
  constructor( navegador:Router, rutaActiva: ActivatedRoute, store: Store<GlobalStateWithNutriApp>){
    super(navegador,rutaActiva,store); 
    this.datos_fisiologicos$ = this._store.pipe( select( nutriAppSelectors.getDatosFisio));
    this.datosFisioForm = new FormGroup({
      'altura': new FormControl(null),
      'peso': new FormControl(null),
      'edad': new FormControl(null),
      'genero': new FormControl(null),
      'nivel_actividad': new FormControl(null)
    });; 

  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

  comprobe_send_data(){
    if(!this.datosFisioForm.valid) return; 
    this._store.dispatch(nutriAppActions.putFisiologicData({datos_fisiologicos: this.datosFisioForm.value}))

  }
}
