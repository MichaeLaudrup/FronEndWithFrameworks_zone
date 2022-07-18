import { createReducer, on } from '@ngrx/store';
import { InfoModalData } from '../models/modal.model';
import * as SharedActions from './shared.actions';

export interface SharedAppState {
    isLoading: boolean, 
    modalOpen: boolean, 
    modalState : InfoModalData; 
}


export const initialState: SharedAppState = {
    isLoading: false,
    modalOpen: false,
    modalState: undefined
}

export const sharedReducer = createReducer(initialState,
    on(SharedActions.displayModal, (state, {title, content}) => ({ ...state, title, content, modalOpen: true})), 
    on(SharedActions.displayInfoModal, (state, {modalInfo}) => ({ ...state, modalState: modalInfo, modalOpen: true})), 
    on(SharedActions.hideModal, ( state ) => ({ ...state, modalOpen:false}))
);
