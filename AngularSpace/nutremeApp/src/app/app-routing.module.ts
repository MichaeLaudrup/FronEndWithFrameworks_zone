import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HojaMBC_IMC, HojaSeleccionObjetivo } from './gestionNuevoUsuario/hoja-formulario/hoja-formulario.component';
import { SeccionBienvenidaComponent } from './gestionNuevoUsuario/seccion-bienvenida/seccion-bienvenida.component';

const routes: Routes = [ 
  {path:'bienvenida', component: SeccionBienvenidaComponent, children:[
    {path: 'objetivo', component: HojaSeleccionObjetivo, data:{animation:'fromLeft'}},
    {path:'MBA_IMC', component: HojaMBC_IMC, data:{animation:'fromLeft'}}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
