import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';

const components = [];
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
