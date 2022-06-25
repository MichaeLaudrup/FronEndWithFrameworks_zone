

import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ignoreElements, Observable } from 'rxjs';
import { GlobalStateWithNutriApp } from 'src/app/nutri-home/store/home.reducer';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
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
  NutritionTarget = NutritionTarget; 
  constructor( navegador:Router , rutaActiva: ActivatedRoute, store: Store<GlobalStateWithNutriApp>){
    super(navegador,rutaActiva,store)
  } 

  seleccionarObjetivo( objetivo:NutritionTarget){
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
  datosFisioForm: UntypedFormGroup; 
  constructor( navegador:Router, rutaActiva: ActivatedRoute, store: Store<GlobalStateWithNutriApp>){
    super(navegador,rutaActiva,store); 
    this.datos_fisiologicos$ = this._store.pipe( select( nutriAppSelectors.getDatosFisio));
    this.datosFisioForm = new UntypedFormGroup({
      'altura': new UntypedFormControl(null),
      'peso': new UntypedFormControl(null),
      'edad': new UntypedFormControl(null),
      'genero': new UntypedFormControl(null),
      'nivel_actividad': new UntypedFormControl(null)
    });; 

  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

  comprobe_send_data(){
    if(!this.datosFisioForm.valid) return; 
    this._store.dispatch(nutriAppActions.putFisiologicData({datos_fisiologicos: this.datosFisioForm.value}))
    this.navegador.navigate(['../../nutri-data'], {relativeTo: this.rutaActiva})


  }
}
