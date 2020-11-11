import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';
import { motion } from 'framer-motion';
import Badge from 'components/badge/Badge';
import { ReleaseButton } from 'components/buttons';

function PokemonCard({ pokemonDetail }) {
  const history = useHistory();
  const myPokemon = JSON.parse(localStorage.getItem('pokemon')) || [];

  const toPokemonDetail = () => {
    history.push(`/details-pokemon?pokemonID=${pokemonDetail.pokemon.id}`);
  };

  const releasePokemon = () => {
    for (const [i, pokemonData] of myPokemon.entries()) {
      if (pokemonData.pokemon.id === pokemonDetail.pokemon.id)
        myPokemon.splice(i, 1);
      localStorage.pokemon = JSON.stringify(myPokemon);
    }
    window.location.reload();
  };

  return (
    <div className="pokemon-card">
      <div className="font-weight-bold h6">
        {pokemonDetail.nickname} / {pokemonDetail.pokemon.name}
      </div>
      <div className="d-flex flex-start">
        {pokemonDetail.pokemon.types.map((typeData) => (
          <div key={typeData.type.name} className="pr-2">
            <Badge>{typeData.type.name}</Badge>
          </div>
        ))}
      </div>
      <div className="pt-4 d-flex flex-start align-items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
          <ReleaseButton title="Release Pokemon" action={releasePokemon} />
        </motion.div>
        <small
          onClick={toPokemonDetail}
          tabIndex="0"
          onKeyPress={null}
          role="button"
          className="pl-3"
          style={{ cursor: 'pointer' }}
        >
          <u>Go to details</u>
        </small>
      </div>
      <img
        className="test"
        src={pokemonDetail.pokemon.sprites.front_default}
        alt="..."
        width="100"
      />
    </div>
  );
}

export default PokemonCard;
