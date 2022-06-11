import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { PanelDatosComponent } from './panel-datos.component';
import { RouterModule } from '@angular/router';

const components =  [
  PanelDatosComponent]
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: components
})
export class PanelDatosModule { 
  
}
