import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';
import { listPokemonReducer } from './list-pokemon/list.pokemon.reducer';

import configureStore from '../store';

const initialState = {};

const rootReducer = () =>
  combineReducers({
    appState: appReducer,
    listPokemonState: listPokemonReducer,
  });

export default configureStore(rootReducer, initialState);
