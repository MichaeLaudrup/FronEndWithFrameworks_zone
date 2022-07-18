import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoModalData } from 'src/app/shared/models/modal.model';
import { sharedFacadeService } from 'src/app/shared/store-shared/shared.facade';
import { Modal } from '../modal.model';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent extends Modal implements OnInit {
  infoData$ : Observable<InfoModalData>; 

  constructor( sharedFacade: sharedFacadeService) {
    super(sharedFacade); 
  }

  ngOnInit(): void {
    this.infoData$ = this.sharedFacade.$infoData; 
  }
}
