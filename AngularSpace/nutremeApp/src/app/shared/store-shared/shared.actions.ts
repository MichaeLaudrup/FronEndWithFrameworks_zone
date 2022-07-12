import { createAction, props } from '@ngrx/store';
import { InfoModalData } from '../models/modal.model';

/* Se crea la accion de insertar un objetivo a traves del formulario al estado global */
export const displayModal = createAction(
  '[Shared] Show a modal',
  props<{ title: string , content: string }>()
);

export const hideModal = createAction(
  '[Shared] Hide Modal'
)

export const displayInfoModal = createAction(
  '[Shared] Show modal with detail information',
  props <{ modalInfo: InfoModalData}>() 
)

