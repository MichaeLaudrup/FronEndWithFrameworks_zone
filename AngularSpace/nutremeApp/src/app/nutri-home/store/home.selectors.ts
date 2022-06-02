import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as homeReducer from './home.reducer'; 


export const getNutriAppSelector = createFeatureSelector<homeReducer.NutriAppState>('nutri-app'); 

export const getObjetivo = createSelector(
    getNutriAppSelector,  (state: homeReducer.NutriAppState) => state.objetivo
);

export const getDatosFisio = createSelector(
    getNutriAppSelector, (state: homeReducer.NutriAppState) => state.datos_fisiologicos
); 
