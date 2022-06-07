import { createAction, props } from '@ngrx/store';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';

/* Se crea la accion de insertar un objetivo a traves del formulario al estado global */
export const setTarget = createAction(
  '[Shared] Introducir objetivo',
  props<{ objetivo: string }>()
);

export const putFisiologicData = createAction(
  '[NutriApp] Poner datos fisiologicos usuario',
  props<{ datos_fisiologicos: FisiologicData}>() 
)
