import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CarrouselHojasComponent } from "./carrousel-hojas/carrousel-hojas.component";
import { formularioNutricionalRoutingModule } from "./formularioNutricional-routing.module";
import { HojaMBC_IMC, HojaSeleccionObjetivo } from "./hoja-formulario/hoja-formulario.component";


@NgModule({
    declarations: [
        HojaSeleccionObjetivo,
        HojaMBC_IMC,
        CarrouselHojasComponent,
    ],
    exports:[
        CarrouselHojasComponent
    ],
    imports:[
        CommonModule,
        formularioNutricionalRoutingModule,
        ReactiveFormsModule,
        SharedModule
        /* De manera informal se puede decir que esto lo que hace es:
           Cuando se cargue este modulo con lazy-load insertar este reducer
           en el StoreModule Global */
    ]
})
export class FormularioNutricionalModule {
    
}