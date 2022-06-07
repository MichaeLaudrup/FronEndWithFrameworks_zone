import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiRequestService } from 'src/app/core/services/APIResquests.service';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import { GlobalStateWithNutriApp, NutriAppState } from '../../store/home.reducer';
import * as homeSelectors from '../../store/home.selectors'
@Component({
  selector: 'app-panel-datos',
  templateUrl: './panel-datos.component.html',
  styleUrls: ['./panel-datos.component.scss']
})
export class PanelDatosComponent implements OnInit {
  objetivo$ ?: Observable<string>; 

  datos_fisiologicos$ ?: Observable<FisiologicData>; 

  alimento: string = ''; 
  constructor(private store: Store<GlobalStateWithNutriApp>, private apiService: ApiRequestService) {
    
   }

  ngOnInit(): void {
    this.objetivo$ = this.store.pipe(select(homeSelectors.getObjetivo))
    this.datos_fisiologicos$ = this.store.pipe(select(homeSelectors.getDatosFisio))
  }



  searchShow(){
    console.log(this.alimento)
    this.apiService.getFoodData(this.alimento).subscribe( (responseData) => {
      console.log(responseData)
    })
  }

}
