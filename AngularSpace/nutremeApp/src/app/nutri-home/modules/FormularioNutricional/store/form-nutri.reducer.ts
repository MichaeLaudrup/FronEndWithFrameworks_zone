
import { createReducer, on } from '@ngrx/store';
import * as NutriFormActions from './form-nutri-actions'


export interface NutriFormState {
    objetivo: String;
    datos_fisiologicos: {
        edad: number;
        altura: number; 
        peso: number; 
        nivel_actividad: number; 
    }
}


/* Estado inicial al empezar la aplicacion */
export const initialState: NutriFormState = {
    objetivo: '',
    datos_fisiologicos: {
        edad: 0,
        altura: 0,
        peso: 0,
        nivel_actividad: 0
    }
}

export const nutriReducer = createReducer(
    initialState,
    on(NutriFormActions.insertarObjetivo, (state, {objetivo}) => ({ ...state, objetivo })),
  );