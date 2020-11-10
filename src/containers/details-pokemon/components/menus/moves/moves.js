import React from 'react';
import Badge from 'components/badge/Badge';

function Moves({ pokemonPayload }) {
  const pokemonMoves = pokemonPayload?.data?.moves ?? {};
  const slicedData = pokemonMoves.slice(0, 10);
  const slicedMoves = pokemonMoves.length > 10 ? slicedData : pokemonMoves;

  return (
    <div className="d-flex flex-wrap">
      {slicedMoves.map((movesData) => (
        <div className="pr-2 mt-2">
          <Badge>{movesData.move.name}</Badge>
        </div>
      ))}
    </div>
  );
}

export default Moves;
