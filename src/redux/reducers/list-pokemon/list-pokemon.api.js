import { GETPAGINATION } from 'service/api';
import endpoint from 'service/endpoint';
import dispatch from 'utils/dispatch';
import {
  listPokemonRequestFailure,
  listPokemonSuccess,
} from './list.pokemon.reducer';
// import { dispatch } from 'utils';

function listPokemonAPI(offset) {
  return GETPAGINATION(endpoint.pokemon, offset);
}

export const listPokemonRequest = async (offset) => {
  const response = await listPokemonAPI(offset);

  try {
    if (response.status === 200) {
      dispatch(listPokemonSuccess(response.data));
    } else {
      dispatch(listPokemonRequestFailure(response.data.message));
    }
  } catch (error) {
    console.log(error);
  }
  return response;
};
