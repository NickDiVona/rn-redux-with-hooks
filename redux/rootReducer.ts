import { combineReducers } from 'redux';
import { featuredTextReducer } from './featuredTextReducer';

export const rootReducer = combineReducers({
  featuredText: featuredTextReducer
});
