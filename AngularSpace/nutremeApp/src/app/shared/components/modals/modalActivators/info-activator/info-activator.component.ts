import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InfoModalData } from 'src/app/shared/models/modal.model';
import * as SharedAction from 'src/app/shared/store-shared/shared.actions'; 
import { sharedFacadeService } from 'src/app/shared/store-shared/shared.facade';
@Component({
  selector: 'app-modal-info-activator',
  templateUrl: './info-activator.component.html',
  styleUrls: ['./info-activator.component.scss']
})
export class InfoActivatorComponent implements OnInit {
  @Input() modalInfo: InfoModalData; 
  constructor(private sharedFacade: sharedFacadeService) { }

  ngOnInit(): void {
  }

  showInfoModal(){
    this.sharedFacade.displayInfoModal( this.modalInfo)
  }

}
