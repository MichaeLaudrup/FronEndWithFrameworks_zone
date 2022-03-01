import { Component, OnInit } from '@angular/core';
import { preciosService } from '../precios.service';

@Component({
  selector: 'app-filtrado-columnas',
  templateUrl: './filtrado-columnas.component.html',
  styleUrls: ['./filtrado-columnas.component.css']
})
export class FiltradoColumnasComponent implements OnInit {

  constructor(private servicioPrecio: preciosService) { }

  ngOnInit(): void {
  }

  conmutaVisibilidadColumna(numeroGrupo:number){
    this.servicioPrecio.ocultarGrupo(numeroGrupo); 
  }

}
