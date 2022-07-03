import { createAction, props } from '@ngrx/store';

/* Se crea la accion de insertar un objetivo a traves del formulario al estado global */
export const displayModal = createAction(
  '[Shared] Show a modal',
  props<{ title: string , content: string }>()
);

export const hideModal = createAction(
  '[Shared] Hide Modal'
)

