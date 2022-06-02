import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [ 
  /* En este caso se implementa lazy-load, cuando la ruta sea nutri-form se cargara el modulo de formulario nutricional, con sus rutas...etc. */
  {path:'nutriapp', loadChildren: () => import('./nutri-home/nutri-home.module').then( m =>  m.NutriHomeModule)},
  {path: 'login', loadChildren: () => import('./core/core.module').then( m => m.CoreModule)},
  {path: '', component: PruebaComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
