import { ActionReducerMap } from '@ngrx/store';
import * as UI from './shared/ui.reducer'
import * as AUTH from './auth/auth.reducer'

export interface AppState {
   ui: UI.State,
   auth: AUTH.AuthState
}

export const appReducers: ActionReducerMap<AppState> = {
   ui: UI.uiReducer,
   auth: AUTH.authReducer
}