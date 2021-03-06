import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiRequestService } from 'src/app/core/services/APIResquests.service';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import { GlobalStateWithNutriApp, NutriAppState } from '../../store-nutri-home/home.reducer';
import * as homeSelectors from '../../store-nutri-home/home.selectors'
@Component({
  selector: 'app-asidebar-menu',
  templateUrl: './asidebar-menu.component.html',
  styleUrls: ['./asidebar-menu.component.scss']
})
export class AsideBarMenuComponent implements OnInit {
  NutritionTarget = NutritionTarget; 
  objetivo$ ?: Observable<NutritionTarget>; 
  datos_fisiologicos$ ?: Observable<FisiologicData>; 
  resultado?: string; 
  alimento: string = ''; 
  isMenuOpened: boolean = false; 
  constructor(private store: Store<GlobalStateWithNutriApp>, private apiService: ApiRequestService) {
    
   }

  ngOnInit(): void {
    this.objetivo$ = this.store.pipe(select(homeSelectors.getObjetivo))
    this.datos_fisiologicos$ = this.store.pipe(select(homeSelectors.getDatosFisio))
  }



  searchShow(){
    console.log(this.alimento)
    this.apiService.getFoodData(this.alimento).subscribe( (responseData) => {
      this.resultado = responseData; 
      console.log(this.resultado)
    })
  }

}
