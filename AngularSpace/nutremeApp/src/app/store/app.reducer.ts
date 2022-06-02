/* Este documento contendra todos los reducers de la aplicacion */

 import { ActionReducerMap, createReducer } from "@ngrx/store";

export interface User {
        variableDeRaizDeaplicacion: string
}


export interface AppState {
    prueba: User
}

export const initialState = {
    variableDeRaizDeaplicacion: 'lo que sea'
}; 


export const pruebaReducer = createReducer( initialState,
    ); 

export const appReducers: ActionReducerMap<AppState> = {
    prueba: pruebaReducer
}; 