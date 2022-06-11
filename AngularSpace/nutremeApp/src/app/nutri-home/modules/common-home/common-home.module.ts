import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbaBoxComponent } from './mba-box/mba-box.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const components = [MbaBoxComponent];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: components
})
export class CommonHomeModule { }
