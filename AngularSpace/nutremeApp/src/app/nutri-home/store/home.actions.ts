import { createAction, props } from '@ngrx/store';

/* Se crea la accion de insertar un objetivo a traves del formulario al estado global */
export const introducirObjetivo = createAction(
  '[Shared] Introducir objetivo',
  props<{ objetivo: string }>()
);
