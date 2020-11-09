import update from 'immutability-helper';
import { createAction, createReducer } from 'redux-act';

const defaultState = {
  data: {},
  success: false,
};

// Create Category
export const [
  detailPokemonRequest,
  detailPokemonSuccess,
  detailPokemonFailure,
] = [
  'DETAIL_POKEMON_REQUEST',
  'DETAIL_POKEMON_SUCCESS',
  'DETAIL_POKEMON_FAILURE',
].map(createAction);

export const detailPokemonReducer = createReducer(
  {
    [detailPokemonSuccess]: (state, payload) => {
      return update(state, {
        data: { $set: payload },
        success: { $set: true },
      });
    },
    [detailPokemonFailure]: (state, payload) => {
      return update(state, {
        data: { $set: payload },
        success: { $set: false },
      });
    },
  },
  defaultState,
);
