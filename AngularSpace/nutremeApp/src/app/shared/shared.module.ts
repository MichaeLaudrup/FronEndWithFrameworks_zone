import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConnectFormDirective } from './directives/connect-form.directive';
import { GaugeComponent } from './components/gauge/gauge.component';
import { InfoModalComponent } from './components/modals/info-modal/info-modal.component';
import { sharedReducer } from './store-shared/shared.reducer';
import { StoreModule } from '@ngrx/store';
import { InfoActivatorComponent } from './components/modals/modalActivators/info-activator/info-activator.component';
import { sharedFacadeService } from './store-shared/shared.facade';

const components = [
  HeaderComponent,
  FooterComponent,
  ConnectFormDirective,
  InfoModalComponent,
  GaugeComponent,
  InfoActivatorComponent,
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared',sharedReducer),
  ],
  exports: [
    components
  ],
  providers: [
    sharedFacadeService
  ]
})
export class SharedModule {

}
