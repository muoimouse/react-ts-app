import { INCREASE } from '../actions/types';
/// <reference path="./interfaces.d.ts" />

const initialState = 0;

export default (state = initialState, action: ActionDefault) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    default:
      return state;
  }
};
