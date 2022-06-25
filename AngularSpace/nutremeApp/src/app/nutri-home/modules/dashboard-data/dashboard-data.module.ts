import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDataRoutingModule } from './dashboard-data-routing.module';
import { DashboardDataComponent } from './dashboard-data.component';
import { CommonHomeModule } from '../common-home/common-home.module';
import { MacronutrientsChartComponent } from './components/macronutrients-chart/macronutrients-chart.component';
import {ChartModule} from 'primeng/chart';
import { AppConfigService } from './services/AppConfigurationService';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { BasicLineChartComponent } from './components/basic-line-chart/basic-line-chart.component';

const components = [DashboardDataComponent,  MacronutrientsChartComponent, BasicLineChartComponent]

@NgModule({
  declarations: [
 
    components,

  ],
  imports: [
    CommonModule,
    DashboardDataRoutingModule,
    CommonHomeModule,
    ChartModule,
    SharedModule,
    HighchartsChartModule

  ],
  providers: [ AppConfigService],
  exports: [components]
})
export class DashboardDataModule { 



  
}
