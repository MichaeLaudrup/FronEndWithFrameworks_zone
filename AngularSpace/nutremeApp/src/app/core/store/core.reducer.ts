import { createReducer } from "@ngrx/store";

export interface User {
    isLoged: boolean,
    userName: string,
    password: string,
}


export interface AppState {
user: User
}

export const initialState = {
    isLoged: false,
    userName: 'admin',
    password: 'admin'
}; 


export const userReducer = createReducer( initialState,
); 