import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AsideBarMenuComponent } from './asidebar-menu';
import { RouterModule } from '@angular/router';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';

const components =  [
  AsideBarMenuComponent]
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, 

  ],
  exports: components
})
export class PanelDatosModule { 
  
}
