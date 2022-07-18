import { Component,  OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { imcInfoData, kcalHistoryInfoData, mbaInfoData } from '@shared/data';
import { InfoModalData } from '@shared/models';
import { Observable} from 'rxjs';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
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
  modalsInfo: any = {};  
  
  constructor( private store: Store<GlobalStateWithNutriApp>) { }
  
  ngOnInit(): void {
    this.fisiologic_data$ = this.store.pipe( select( nutriStoreSelector.getDatosFisio)); 
    this.objetive$ = this.store.pipe( select(nutriStoreSelector.getObjetivo)); 
    this.setModalInfoData(); 
  }


  public setModalInfoData() {
       console.log(kcalHistoryInfoData)
     this.modalsInfo.mbaInfoData = mbaInfoData; 
     this.modalsInfo.imcInfoData = imcInfoData; 
     this.modalsInfo.kcalHistoryInfoData = kcalHistoryInfoData; 
  }




}
