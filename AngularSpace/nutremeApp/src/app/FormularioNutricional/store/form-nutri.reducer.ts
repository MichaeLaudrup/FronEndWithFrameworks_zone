import { Action, createReducer, on } from '@ngrx/store';
import * as NutriFormActions from './form-nutri-actions'


export interface NutriFormState {
    objetivo: String;
}


/* Estado inicial al empezar la aplicacion */
export const initialState: NutriFormState = {
    objetivo: ''
}

export const nutriReducer = createReducer(
    initialState,
    on(NutriFormActions.insertarObjetivo, (state, {objetivo}) => ({ ...state, objetivo })),
  );