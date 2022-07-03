import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GlobalStateWithShared } from "../../store-shared/shared.reducer";
import * as SharedActions from "../../store-shared/shared.actions"; 


@Component({
    selector: 'app-modal',
    template: ''
  })
export class Modal {
    _title: string; 
    _content: string; 
 
    constructor(protected store: Store<GlobalStateWithShared>){
        
    }
    hideModal() {
        this.store.dispatch(SharedActions.hideModal()); 
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
}