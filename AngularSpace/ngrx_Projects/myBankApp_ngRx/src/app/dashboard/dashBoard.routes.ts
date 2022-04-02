import { Routes } from "@angular/router";
import { DetalleComponent } from "../ingresosGastos/detalle/detalle.component";
import { EstadisticaComponent } from "../ingresosGastos/estadistica/estadistica.component";
import { IngresosGastosComponent } from "../ingresosGastos/ingresos-gastos.component";

export const dashboardRoutes: Routes = [
    {path:'', component: EstadisticaComponent},
    {path: 'flujoCaja', component: IngresosGastosComponent},
    {path: 'detalle', component: DetalleComponent}
]