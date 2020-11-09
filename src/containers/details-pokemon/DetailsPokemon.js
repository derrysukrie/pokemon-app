import React, { useEffect } from 'react';
import './style.css';
import Loader from 'components/loader/Loader';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { detailPokemonRequest } from 'redux/reducers/detail-pokemon/detail-pokemon.api';
import Menus from './components/menus/Menus';

function DetailsPokemon({ detailPokemonState }) {
  const location = useLocation();
  const pokemonName = location.state?.name ?? '';
  const parsed = queryString.parse(location.search);
  const pokemonTypes = detailPokemonState?.data.types ?? [];
  const pokemonSprites = detailPokemonState?.data.sprites ?? {};

  useEffect(() => {
    fetchDetailPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDetailPokemon = () => {
    detailPokemonRequest(parsed.pokemonID);
  };

  const renderTypes = (types) => (
    <div className="badge mr-2">{types.type.name}</div>
  );

  if (!detailPokemonState.success) {
    return <Loader />;
  }

  return (
    <div className="pokemon-detail">
      <div className="pokemon-name">
        <span>{pokemonName}</span>
      </div>
      <div className="d-flex flex-start">
        {pokemonTypes.map((types) => renderTypes(types))}
      </div>
      <div className="text-center mt-4">
        <img
          src={pokemonSprites.front_default}
          alt="pokeimage"
          className="pokemon-image-wrapper"
          width="50%"
        />
      </div>
      <div className="fixed-bottom" id="fixed-width">
        <div className="pokemon-details">
          <Menus />
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  detailPokemonState: state.detailPokemonState,
});

export default connect(mapState, null)(DetailsPokemon);
