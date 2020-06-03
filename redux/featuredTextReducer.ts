import * as actions from './actionTypes';

const INITIAL_STATE = 'hello world';

export const featuredTextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CHANGE_TEXT:
      return action.payload;

    default:
      return INITIAL_STATE;
  }
};
