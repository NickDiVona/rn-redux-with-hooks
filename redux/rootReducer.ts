import { combineReducers } from 'redux';
import { sampleReducer } from './sampleReducer';

export const rootReducer = combineReducers({
  sample: sampleReducer
});
