import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { GlobalState } from 'src/app/store/app.reducer';
import * as SharedActions from './shared.actions';

export interface SharedAppState {
    isLoading: boolean, 
    modalOpen: boolean, 
    modalState : {
        title: string,
        content: string
    }

}
export interface GlobalStateWithShared extends GlobalState{
    sharedState: SharedAppState; 
}


export const initialState: SharedAppState = {
   isLoading: false,
   modalOpen: true,
   modalState: {
    title: 'Proving',
    content: 'Proving content'
   }
}

export const sharedReducer = createReducer(initialState,
    on(SharedActions.displayModal, (state, {title, content}) => ({ ...state, title, content, modalOpen: true})), 
    on(SharedActions.hideModal, ( state ) => ({ ...state, modalOpen:false}))
);
