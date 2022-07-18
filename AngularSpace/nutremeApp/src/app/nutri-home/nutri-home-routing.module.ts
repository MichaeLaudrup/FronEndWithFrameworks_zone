import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutriHomeComponent } from './nutri-home.component';

const routes: Routes = [
  {
    path: '', component: NutriHomeComponent,
    children: [ {path:'nutri-form', loadChildren: () => import('./modules/FormularioNutricional/formularioNutricional.module').then( m => m.FormularioNutricionalModule)},
                {path:'nutri-data', loadChildren: () => import('./modules/dashboard-data/dashboard-data.module').then( m => m.DashboardDataModule)},
                {path:'nutri-store', loadChildren: () => import('./modules/store-room/store-room.module').then(m => m.StoreRoomModule)},
                {path:'**', redirectTo: 'nutri-form'}]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutriHomeRoutingModule { }
