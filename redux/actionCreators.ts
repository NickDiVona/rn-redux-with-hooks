import * as actions from './actionTypes';

export const changeText = (text: String) => {
  return {
    type: actions.CHANGE_TEXT,
    payload: text
  };
};
