import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULOS MIOS */
import { SharedModule } from '../shared/shared.module';

import { NutriHomeRoutingModule } from './nutri-home-routing.module';
import { NutriHomeComponent } from './nutri-home.component';
import { StoreModule } from '@ngrx/store';
import { nutriAppReducer } from './store/home.reducer';
import { PanelDatosComponent } from './modules/panel-datos/panel-datos.component';
import { PanelDatosModule } from './modules/panel-datos/panel-datos.module';



@NgModule({
  declarations: [
    NutriHomeComponent,
    PanelDatosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NutriHomeRoutingModule,
    PanelDatosModule,
    StoreModule.forFeature('nutri-app', nutriAppReducer)
  ]
})
export class NutriHomeModule { }
