import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export const dataStore = createStore(rootReducer);
