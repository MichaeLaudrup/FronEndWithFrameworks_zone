import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { GlobalStateWithShared } from './shared/store-shared/shared.reducer';
import * as SharedSelectors from './shared/store-shared/shared.selectors'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'nutremeApp';
  showModal$: Observable<boolean>; 
  constructor( private store: Store<GlobalStateWithShared>){}
  ngOnInit() {
    this.showModal$ = this.store.pipe(select(SharedSelectors.getModalIsOpen)); 
  }

  ngOnDestroy(): void {
  }


}
