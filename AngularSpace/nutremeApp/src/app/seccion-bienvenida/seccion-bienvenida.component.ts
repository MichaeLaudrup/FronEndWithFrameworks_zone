import { Component, OnInit } from '@angular/core';
import { fader } from 'src/app/animaciones/route.animations';

@Component({
  selector: 'app-seccion-bienvenida',
  templateUrl: './seccion-bienvenida.component.html',
  styleUrls: ['./seccion-bienvenida.component.scss'],
  animations: [fader]
})
export class SeccionBienvenidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
