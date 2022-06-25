import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULOS MIOS */
import { SharedModule } from '../shared/shared.module';

import { NutriHomeRoutingModule } from './nutri-home-routing.module';
import { NutriHomeComponent } from './nutri-home.component';
import { StoreModule } from '@ngrx/store';
import { nutriAppReducer } from './store/home.reducer';
import { PanelDatosModule } from './modules/asidebar-menu/panel-datos.module';
import { BasicLineChartComponent } from './modules/dashboard-data/components/basic-line-chart/basic-line-chart.component';



@NgModule({
  declarations: [
    NutriHomeComponent,
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
