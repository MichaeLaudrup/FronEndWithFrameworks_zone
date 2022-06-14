import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbaBoxComponent } from './mba-box/mba-box.component';
import { ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';

const components = [MbaBoxComponent];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ButtonModule,
    ChartModule

  ],
  exports: components
})
export class CommonHomeModule { }
