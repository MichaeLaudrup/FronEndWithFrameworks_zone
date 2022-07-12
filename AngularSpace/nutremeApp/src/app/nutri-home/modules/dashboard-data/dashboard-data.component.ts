import { Component,  OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import { InfoModalData } from 'src/app/shared/models/modal.model';
import { GlobalStateWithNutriApp } from '../../store-nutri-home/home.reducer';
import * as nutriStoreSelector from '../../store-nutri-home/home.selectors'; 

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.scss']
})
export class DashboardDataComponent implements OnInit {
  fisiologic_data$: Observable<FisiologicData>; 
  objetive$: Observable<NutritionTarget>
  mba: number = 0;
  mbaWithActivity: number = 0; 
  mbaWithActivityAndObjetive: number = 0;  
  
  constructor( private store: Store<GlobalStateWithNutriApp>) { }
  
  ngOnInit(): void {
    this.fisiologic_data$ = this.store.pipe( select( nutriStoreSelector.getDatosFisio)); 
    this.objetive$ = this.store.pipe( select(nutriStoreSelector.getObjetivo)); 
  }


  public obtainModalMockData() {
    let mockData: InfoModalData = {
      title:'Historial de consumo calórico',
      content:'El historial de consumo calórico controla el número de kilo calorías diarías que consumes (línea de color verde), frente al número de Kcal diarias \
                          que deberías consumir según tus necesidades nutricionales ',
      subtitle: 'MBA', 
      links: [
        {
        title: '¿Qué son las kcal?',
        description: '',
        url: 'https://es.wikipedia.org/wiki/Calor%C3%ADa'
        },
        {
          title: '¿Cuantás calorías debo consumir en un día?',
          description: '',
          url: 'https://es.wikipedia.org/wiki/%C3%8Dndice_metab%C3%B3lico_basal'
        },
      ]
    }; 
    return mockData; 
  }




}
