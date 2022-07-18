import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as sharedReducer from './shared.reducer'; 


export const getSharedAppSelector = createFeatureSelector<sharedReducer.SharedAppState>('shared'); 

export const getModalIsOpen = createSelector(
    getSharedAppSelector,  (state: sharedReducer.SharedAppState) => state.modalOpen
);

export const getModalInfo = createSelector(
    getSharedAppSelector, ( state: sharedReducer.SharedAppState) => state.modalState
); 

