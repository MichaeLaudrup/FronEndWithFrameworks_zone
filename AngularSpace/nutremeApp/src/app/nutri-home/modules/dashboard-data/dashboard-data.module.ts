import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDataRoutingModule } from './dashboard-data-routing.module';
import { DashboardDataComponent } from './dashboard-data.component';
import { CommonHomeModule } from '../common-home/common-home.module';
import { NgxChartsModule }from '@swimlane/ngx-charts';

const components = [DashboardDataComponent]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    DashboardDataRoutingModule,
    CommonHomeModule,
    NgxChartsModule

  ],
  exports: [components]
})
export class DashboardDataModule { }
