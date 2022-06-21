import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDataRoutingModule } from './dashboard-data-routing.module';
import { DashboardDataComponent } from './dashboard-data.component';
import { CommonHomeModule } from '../common-home/common-home.module';
import { MacronutrientsChartComponent } from './components/macronutrients-chart/macronutrients-chart.component';
import {ChartModule} from 'primeng/chart';
import { AppConfigService } from './services/AppConfigurationService';
const components = [DashboardDataComponent,  MacronutrientsChartComponent]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    DashboardDataRoutingModule,
    CommonHomeModule,
    ChartModule

  ],
  providers: [ AppConfigService],
  exports: [components]
})
export class DashboardDataModule { 



  
}
