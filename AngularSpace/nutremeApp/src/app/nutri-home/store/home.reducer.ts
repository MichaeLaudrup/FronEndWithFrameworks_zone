import { createReducer, on } from '@ngrx/store';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import { GlobalState } from 'src/app/store/app.reducer';
import * as SharedActions from './home.actions';

export interface NutriAppState {
    objetivo:string,
    datos_fisiologicos: FisiologicData
}
export interface GlobalStateWithNutriApp extends GlobalState{
    nutriapp: NutriAppState; 
}


export const initialState: NutriAppState = {
   objetivo: 'Bailar la conga',
   datos_fisiologicos: {
    altura: 1.76,
    peso: 89,
    edad: 25,
    genero: 'Mujer',
    nivel_actividad: 1.2
}

}

export const nutriAppReducer = createReducer(initialState,
    on(SharedActions.introducirObjetivo, (state, {objetivo}) => ({ ...state, objetivo})),
);

