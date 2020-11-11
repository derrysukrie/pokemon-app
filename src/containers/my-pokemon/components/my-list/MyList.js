import React from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from 'components/card/PokemonCard';

function MyList() {
  const myPokemon = JSON.parse(localStorage.getItem('pokemon')) || [];
  const history = useHistory();

  return (
    <div>
      <div
        className="mb-4"
        tabIndex="0"
        onKeyPress={null}
        role="button"
        onClick={() => history.goBack()}
      >
        <img
          style={{ cursor: 'pointer' }}
          src="/left-arrow.svg"
          width="25"
          alt="arrow"
        />
      </div>
      <h5 className="font-weight-bold">My Pokemon List</h5>
      {myPokemon.map((pokemonData) => (
        <div key={pokemonData.pokemon.id} className="pb-3">
          <PokemonCard pokemonDetail={pokemonData} />
        </div>
      ))}
    </div>
  );
}
export default MyList;
