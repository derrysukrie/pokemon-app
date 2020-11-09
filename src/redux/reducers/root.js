import { combineReducers } from 'redux';
import { listPokemonReducer } from './list-pokemon/list.pokemon.reducer';

import configureStore from '../store';
import { detailPokemonReducer } from './detail-pokemon/detail-pokemon.reducer';

const initialState = {};

const rootReducer = () =>
  combineReducers({
    listPokemonState: listPokemonReducer,
    detailPokemonState: detailPokemonReducer,
  });

export default configureStore(rootReducer, initialState);
