import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CarrouselHojasComponent } from "./carrousel-hojas/carrousel-hojas.component";
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
        AppRoutingModule
    ]
})
export class FormularioNutricionalModule {
    
}