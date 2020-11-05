import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';

import configureStore from '../store';

const initialState = {};

const rootReducer = () =>
  combineReducers({
    appState: appReducer,
  });

export default configureStore(rootReducer, initialState);
