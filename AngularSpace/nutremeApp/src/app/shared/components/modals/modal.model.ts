import { Component } from "@angular/core";
import { sharedFacadeService } from "../../store-shared/shared.facade";


@Component({
    selector: 'app-modal',
    template: ''
  })
export class Modal {
    _title: string; 
    _content: string; 
 
    constructor(protected sharedFacade: sharedFacadeService){
        
    }
    hideModal() {
        this.sharedFacade.hideModal(); 
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