import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalStateWithNutriApp, NutriAppState } from '../../store/home.reducer';
import * as homeSelectors from '../../store/home.selectors'
@Component({
  selector: 'app-panel-datos',
  templateUrl: './panel-datos.component.html',
  styleUrls: ['./panel-datos.component.scss']
})
export class PanelDatosComponent implements OnInit {
  objetivo$ ?: Observable<string>; 


  constructor(private store: Store<GlobalStateWithNutriApp>) {
    
   }

  ngOnInit(): void {
    this.objetivo$ = this.store.pipe(select(homeSelectors.getObjetivo))
  }

}
