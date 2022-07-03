import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import { GlobalStateWithNutriApp } from '../../store-nutri-home/home.reducer';
import * as nutriStoreSelector from '../../store-nutri-home/home.selectors'; 
import * as Highcharts from 'highcharts';

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
    this.objetive$ = this.store.pipe( select(nutriStoreSelector.getObjetivo))

    
  }
  }
