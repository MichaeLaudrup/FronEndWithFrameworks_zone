import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input('contador') contador!:number; 
  @Output('onContadorChanged') contadorCambiado = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *= 2; 
    this.contadorCambiado.emit(this.contador)
  }

  dividir(){
    this.contador /= 2; 
    this.contadorCambiado.emit(this.contador)
  }

}
