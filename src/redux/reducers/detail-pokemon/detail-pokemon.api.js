import { GET } from 'service/api';
import endpoint from 'service/endpoint';
import dispatch from 'utils/dispatch';
import {
  detailPokemonSuccess,
  detailPokemonFailure,
} from './detail-pokemon.reducer';
// import { dispatch } from 'utils';

function detailPokemonAPI(pokemonID) {
  return GET(endpoint.pokemon, pokemonID);
}

export const detailPokemonRequest = async (pokemonID) => {
  const response = await detailPokemonAPI(pokemonID);

  try {
    if (response.status === 200) {
      dispatch(detailPokemonSuccess(response.data));
    } else {
      dispatch(detailPokemonFailure(response.data.message));
    }
  } catch (error) {
    console.log(error);
  }
  return response;
};
