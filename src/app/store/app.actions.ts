import { createAction, props } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';

export const addItemToBucket = createAction(
  '[Bucket] Add Item', // => Este es el nombre de la acción
  props<IFruit>() // => Este props es el que se va a enviar al reducer
);

export const removeItemFromBucket = createAction(
  '[Bucket] Remove Item',
  props<IFruit>()
);
