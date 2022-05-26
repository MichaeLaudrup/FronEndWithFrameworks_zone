import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './generalDesign/header/header.component';
import { FooterComponent } from './generalDesign/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* Para que los reducers se carguen segun se van cargando modulos con el lazy-load se deja un objeto vacio
      Antes, sin lazy-load habia que aglomerar todos los reducers de la aplicacion en un archivo o definirlos aqui
      pero como "no se sabe" que "modulos se cargaran primero, cuales si, o cuales no" entonces se deja vacio
      y se delega la responsabilidad a ngrx junto con lazy-load
    */
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
