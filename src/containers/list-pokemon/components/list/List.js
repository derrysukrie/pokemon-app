import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style.css';

import MainCard from 'components/card/MainCard';

function List({ listPokemon }) {
  const history = useHistory();
  const payload = listPokemon?.data?.results ?? [];

  const toPokemonDetail = (list) => {
    const pokemonID = list.url.split('/');
    history.push(`/details-pokemon?pokemonID=${pokemonID[6]}`, {
      name: list.name,
    });
  };

  return (
    <div className="list-pokemon">
      <h6>Pokelist</h6>
      <div className="mt-3">
        {payload.map((list) => (
          <div key={list.name} className="pb-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
              <div
                onClick={() => toPokemonDetail(list)}
                tabIndex="0"
                onKeyPress={null}
                role="button"
              >
                <MainCard list={list} />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
