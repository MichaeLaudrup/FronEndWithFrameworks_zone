import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './store/app.reducer';
import { PruebaComponent } from './prueba/prueba.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    BrowserAnimationsModule,
    /* Para que los reducers se carguen segun se van cargando modulos con el lazy-load se deja un objeto vacio
      Antes, sin lazy-load habia que aglomerar todos los reducers de la aplicacion en un archivo o definirlos aqui
      pero como "no se sabe" que "modulos se cargaran primero, cuales si, o cuales no" entonces se deja vacio
      y se delega la responsabilidad a ngrx junto con lazy-load
    */
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
