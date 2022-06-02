import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULOS MIOS */
import { SharedModule } from '../shared/shared.module';

import { NutriHomeRoutingModule } from './nutri-home-routing.module';
import { NutriHomeComponent } from './nutri-home.component';
import { StoreModule } from '@ngrx/store';
import { nutriAppReducer } from './store/home.reducer';



@NgModule({
  declarations: [
    NutriHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NutriHomeRoutingModule,
    StoreModule.forFeature('nutriApp', nutriAppReducer)
  ]
})
export class NutriHomeModule { }
