import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import './style.css';

import MainCard from 'components/card/MainCard';

function List({ listPokemon }) {
  const payload = listPokemon?.data?.results ?? [];

  return (
    <div className="list-pokemon">
      <h6>Pokelist</h6>
      <div className="mt-3">
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* array of JSX items */}
          {payload.map((list) => (
            <div key={list.name}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <MainCard list={list} />
              </motion.div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default List;
