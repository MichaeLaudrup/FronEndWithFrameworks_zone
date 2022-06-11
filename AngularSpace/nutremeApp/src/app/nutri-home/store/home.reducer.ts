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
    altura: 176,
    peso: 89,
    edad: 25,
    genero: 'Mujer',
    nivel_actividad: 1.2
}

}

export const nutriAppReducer = createReducer(initialState,
    on(SharedActions.setTarget, (state, {objetivo}) => ({ ...state, objetivo})),


    on(SharedActions.putFisiologicData, (state, {datos_fisiologicos}) => {
        let {nivel_actividad} = datos_fisiologicos; 
        let mba = calcMBA(datos_fisiologicos); 
        let mbaWithActivity = mba * nivel_actividad; 
        let imc = calcIMC(datos_fisiologicos); 
        return ({...state, datos_fisiologicos: {...datos_fisiologicos, mba, mbaWithActivity, imc}})
    })
);


const calcMBA = function ({ altura, peso, edad, genero}: FisiologicData ) : number { 
    let mba = 0; 
    if(genero === 'Hombre'){
        mba = Math.trunc(66.5 + (13.76 * peso ) + (5.003 * altura) - (6.755 * edad)); 
    }else{
        mba = (665 + (9.563 * peso ) + (1.850 * altura) - (4.676 * edad));; 
    }
    return mba; 
}

const calcIMC = function ({altura, peso}: FisiologicData) : number {
    return ((peso) / (altura/100)**2); 
}

