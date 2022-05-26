import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CarrouselHojasComponent } from "./carrousel-hojas/carrousel-hojas.component";
import { formularioNutricionalRoutingModule } from "./formularioNutricional-routing.module";
import { HojaMBC_IMC, HojaSeleccionObjetivo } from "./hoja-formulario/hoja-formulario.component";
import { nutriReducer } from "./store/form-nutri.reducer";

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
        /* De manera informal se puede decir que esto lo que hace es:
           Cuando se cargue este modulo con lazy-load insertar este reducer
           en el StoreModule Global */
        StoreModule.forFeature('nutri', nutriReducer)
    ]
})
export class FormularioNutricionalModule {
    
}