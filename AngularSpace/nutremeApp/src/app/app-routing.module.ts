import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  /* En este caso se implementa lazy-load, cuando la ruta sea nutri-form se cargara el modulo de formulario nutricional, con sus rutas...etc. */
 {path:'nutri-form', loadChildren: () => import('./FormularioNutricional/formularioNutricional.module').then( m =>  m.FormularioNutricionalModule)},
 /*Cualquier ruta que no este contemplada en los anteriores objetos de tipo ruta redireccionara a "nutri-form"*/
/*  {path: '**', redirectTo: '', pathMatch: 'full'}  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
