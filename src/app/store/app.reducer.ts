import { Action, createReducer, on } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';
import * as AppActions from './app.actions';

export interface AppState {
  bucket: IFruit[];
}

export const initialState: AppState = {
  bucket: [],
};

const appReducer = createReducer(
  initialState,
  on(AppActions.addItemToBucket, (state, fruit) => ({
    ...state,
    bucket: [...state.bucket, fruit],
  })),
  on(AppActions.removeItemFromBucket, (state, fruit) => {
    return {
      ...state,
      bucket: state.bucket.filter((bucketItem) => {
        return bucketItem.id !== fruit.id;
      }),
    };
  })
);

export function reducer(state: AppState = initialState, action: Action) {
  return appReducer(state, action);
}
