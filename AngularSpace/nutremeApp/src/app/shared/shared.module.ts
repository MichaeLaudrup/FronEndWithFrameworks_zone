import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConnectFormDirective } from './directives/connect-form.directive';
import { GaugeComponent } from './components/gauge/gauge.component';




const components = [
  HeaderComponent,
  FooterComponent,
  ConnectFormDirective,
  GaugeComponent
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    components
  ]
})
export class SharedModule {

}
