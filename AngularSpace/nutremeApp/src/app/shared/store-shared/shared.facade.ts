import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { Observable } from "rxjs";
import { InfoModalData } from "../models/modal.model";
import * as sharedActions from './shared.actions'; 
import * as sharedSelector from './shared.selectors'; 
@Injectable()
export class sharedFacadeService {
    $infoData: Observable<InfoModalData> = this.store.pipe(select(sharedSelector.getModalInfo)); 

    constructor( private store: Store<any> ){}

    hideModal() {
        this.store.dispatch(sharedActions.hideModal()); 
    }

    displayInfoModal( modalInfo: InfoModalData){
        this.store.dispatch(sharedActions.displayInfoModal({ modalInfo}))
    }





}