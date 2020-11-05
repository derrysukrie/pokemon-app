import update from 'immutability-helper';
import { createAction, createReducer } from 'redux-act';

const defaultState = {
  token: '',
  loader: [],
};

export const [setToken, setGenericAddLoader, setGenericRemoveLoader] = [
  'APP/SET_TOKEN',
  'APP/ADD_LOADER',
  'APP/REMOVE_LOADER',
].map(createAction);

export const appReducer = createReducer(
  {
    [setToken]: (state, payload) => {
      return update(state, {
        token: { $set: payload },
      });
    },
    [setGenericAddLoader]: (state, payload) => {
      return update(state, {
        loader: { $set: [...state.loader, payload] },
      });
    },
    [setGenericRemoveLoader]: (state, payload) => {
      return update(state, {
        loader: { $set: state.loader.filter((e) => e !== payload) },
      });
    },
  },
  defaultState,
);
