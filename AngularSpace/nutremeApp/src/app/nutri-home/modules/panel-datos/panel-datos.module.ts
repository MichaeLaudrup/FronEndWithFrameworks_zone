import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelDatosRoutingModule } from './panel-datos-routing.module';
import { FormsModule } from '@angular/forms';
import { PanelDatosComponent } from './panel-datos.component';

const components =  [
  PanelDatosComponent]
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PanelDatosRoutingModule,
    FormsModule
  ],
  exports: components
})
export class PanelDatosModule { 
  
}
