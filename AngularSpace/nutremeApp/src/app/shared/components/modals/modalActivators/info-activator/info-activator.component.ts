import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalStateWithShared } from 'src/app/shared/store-shared/shared.reducer';
import * as SharedAction from 'src/app/shared/store-shared/shared.actions'; 
@Component({
  selector: 'app-modal-info-activator',
  templateUrl: './info-activator.component.html',
  styleUrls: ['./info-activator.component.scss']
})
export class InfoActivatorComponent implements OnInit {

  constructor(private store: Store<GlobalStateWithShared>) { }

  ngOnInit(): void {
  }

  showInfoModal(){
    this.store.dispatch( SharedAction.displayModal({title: 'proving', content: 'proving 2'})); 
  }

}
