import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GlobalStateWithShared } from 'src/app/shared/store-shared/shared.reducer';
import { Modal } from '../modal.model';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent extends Modal implements OnInit {
  subscriptions: Subscription[]; 
  constructor( store: Store<GlobalStateWithShared>) {
    super(store); 
  }
  ngOnInit(): void {
  }

}
