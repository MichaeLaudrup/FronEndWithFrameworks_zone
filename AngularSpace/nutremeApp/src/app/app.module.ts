import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrouselHojasComponent } from './gestionNuevoUsuario/carrousel-hojas/carrousel-hojas.component';
import { HojaMBC_IMC, HojaSeleccionObjetivo } from './gestionNuevoUsuario/hoja-formulario/hoja-formulario.component';
import { PanelDatosUsuarioComponent } from './gestionNuevoUsuario/panel-datos-usuario/panel-datos-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeccionBienvenidaComponent } from './gestionNuevoUsuario/seccion-bienvenida/seccion-bienvenida.component';
import { HeaderComponent } from './generalDesign/header/header.component';
import { FooterComponent } from './generalDesign/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselHojasComponent,
    PanelDatosUsuarioComponent,
    HojaSeleccionObjetivo,
    HojaMBC_IMC,
    SeccionBienvenidaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
