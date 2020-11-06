import update from 'immutability-helper';
import { createAction, createReducer } from 'redux-act';

const defaultState = {
  data: {},
  success: false,
};

// Create Category
export const [listPokemonRequest, listPokemonRequestFailure] = [
  'LIST_REQUEST',
  'LIST_FAILURE',
].map(createAction);

export const listPokemonReducer = createReducer(
  {
    [listPokemonRequest]: (state, payload) => {
      return update(state, {
        data: { $set: payload },
        success: { $set: true },
      });
    },
    [listPokemonRequestFailure]: (state, payload) => {
      return update(state, {
        data: { $set: payload },
        success: { $set: false },
      });
    },
  },
  defaultState,
);
