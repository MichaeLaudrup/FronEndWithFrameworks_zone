import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeccionBienvenidaComponent } from './seccion-bienvenida/seccion-bienvenida.component';
import { HeaderComponent } from './generalDesign/header/header.component';
import { FooterComponent } from './generalDesign/footer/footer.component';
import { FormularioNutricionalModule } from './FormularioNutricional/formularioNutricional.module';
import { PanelDatosNutricionalesComponent } from './panelDatosNutricionales/panel-datos-nutricionales.component';
import { SpeedmeterComponent } from './panelDatosNutricionales/speedmeter/speedmeter.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionBienvenidaComponent,
    HeaderComponent,
    FooterComponent,
    PanelDatosNutricionalesComponent,
    SpeedmeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormularioNutricionalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
