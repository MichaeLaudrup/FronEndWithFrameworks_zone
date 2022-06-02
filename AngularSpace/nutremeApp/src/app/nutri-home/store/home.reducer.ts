import { createReducer, on } from '@ngrx/store';
import * as SharedActions from './home.actions';

export interface NutriAppState {
    objetivo:string,
    datos_fisiologicos: {
        altura: number,
        peso: number,
        edad: number,
        sexo: string,
        actividad_diaria: number
    }
}

export const initialState: NutriAppState = {
   objetivo: '',
   datos_fisiologicos: {
    altura: 0,
    peso: 0,
    edad: 0,
    sexo: 'hombre',
    actividad_diaria: 0
}

}

export const nutriAppReducer = createReducer(initialState,
    on(SharedActions.introducirObjetivo, (state, {objetivo}) => ({ ...state, objetivo})),
);

