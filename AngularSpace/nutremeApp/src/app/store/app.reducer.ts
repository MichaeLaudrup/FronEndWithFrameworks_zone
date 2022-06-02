/* Este documento contendra todos los reducers de la aplicacion */

 import { ActionReducerMap, createReducer } from "@ngrx/store";

export interface GlobalState {
        nombreAplicacion: string
}


export interface AppState {
    prueba: GlobalState
}

export const initialState = {
    nombreAplicacion: 'Nutreme app'
}; 


export const pruebaReducer = createReducer( initialState,
    ); 

export const appReducers: ActionReducerMap<AppState> = {
    prueba: pruebaReducer
}; 