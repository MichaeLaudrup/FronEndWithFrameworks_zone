import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutriHomeComponent } from './nutri-home.component';

const routes: Routes = [
  {
    path: '', component: NutriHomeComponent,
    children: [ {path:'bienvenida', loadChildren: () => import('./modules/FormularioNutricional/formularioNutricional.module').then( m => m.FormularioNutricionalModule)},
                {path:'**', redirectTo: 'bienvenida'}]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutriHomeRoutingModule { }
