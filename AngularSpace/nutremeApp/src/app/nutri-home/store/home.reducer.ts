import { createReducer, on } from '@ngrx/store';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import { GlobalState } from 'src/app/store/app.reducer';
import * as SharedActions from './home.actions';

export interface NutriAppState {
    objetivo:NutritionTarget,
    datos_fisiologicos: FisiologicData
}
export interface GlobalStateWithNutriApp extends GlobalState{
    nutriapp: NutriAppState; 
}


export const initialState: NutriAppState = {
   objetivo: NutritionTarget.hypertrophy,
   datos_fisiologicos: {
    altura: 178,
    peso: 79,
    edad: 28,
    genero: 'Hombre',
    nivel_actividad: 1.375,
    mba: 1854,
    mbaWithActivity: 2550,
    mbaWithActivityAndObjetive: 3059.1,
    imc: 23.67,
    diaryWater: 2.82
}

}

export const nutriAppReducer = createReducer(initialState,
    on(SharedActions.setTarget, (state, {objetivo}) => ({ ...state, objetivo})),


    on(SharedActions.putFisiologicData, (state, {datos_fisiologicos}) => {
        let {nivel_actividad, peso} = datos_fisiologicos; 
        let mba = calcMBA(datos_fisiologicos); 
        let mbaWithActivity = mba * nivel_actividad; 
        let mbaWithActivityAndObjetive = calcMBAWithObjetive( mbaWithActivity, state.objetivo); 
        let imc = calcIMC(datos_fisiologicos); 
        let diaryWater = (peso / 7 * 250) / 1000; 
        return ({...state, datos_fisiologicos: {...datos_fisiologicos, mba, mbaWithActivity, imc, mbaWithActivityAndObjetive, diaryWater}})
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

function calcMBAWithObjetive(mbaWithActivity: number, objetive: NutritionTarget) : number{
    switch(objetive){
        case NutritionTarget.maintainWeight:
            return mbaWithActivity; 
        case NutritionTarget.lostWeight: 
            return mbaWithActivity * 0.85;
        case NutritionTarget.gainWeight:
            return mbaWithActivity * 1.15; 
        case NutritionTarget.define: 
            return mbaWithActivity * 0.80; 
        default: 
            return mbaWithActivity * 1.20;  
    }
}

