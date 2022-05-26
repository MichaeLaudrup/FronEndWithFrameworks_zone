import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrouselHojasComponent } from "./carrousel-hojas/carrousel-hojas.component";
import { HojaMBC_IMC, HojaSeleccionObjetivo } from "./hoja-formulario/hoja-formulario.component";


const routes : Routes = [
    /* En esta ruta path: '' por tema de lazy-load y modularizacion aunque no se aprecie en este codigo
       realmente se esta haciendo referencia a "nutri-form" */
    { path:'',
      component: CarrouselHojasComponent,
      children: [
        /* En caso de que la ruta sea "/nutri-form/objetivo" se carga la primera hoja del formulario */
        {path: 'objetivo', component: HojaSeleccionObjetivo, data:{animation:'pagina_objetivo'}},
        /* En caso de que la ruta sea "/nutri-form/MBC_IMC" se carga la hoja para calcular MBA e IMC */
        {path:'MBA_IMC', component: HojaMBC_IMC, data:{animation:'pagina_MBA_IMC'}},
        /* En caso de que la ruta sea "nutri-form/" se redirigira a "nutri-form/objetivo" */
        { path: '**', redirectTo: 'objetivo'}
      ]}
]; 
@NgModule({
    imports:[
      RouterModule.forChild(routes)
    ],
    exports:[
      RouterModule
    ]
})
export class formularioNutricionalRoutingModule {

}