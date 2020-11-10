import React, { useEffect, useState } from 'react';
import './style.css';
import { Modal, Input, message } from 'antd';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { detailPokemonRequest } from 'redux/reducers/detail-pokemon/detail-pokemon.api';

import { ActionButton } from 'components/buttons';
import Loader from 'components/loader/Loader';
import Menus from './components/menus/Menus';

function DetailsPokemon({ detailPokemonState }) {
  const myPokemon = JSON.parse(localStorage.getItem('pokemon')) || [];

  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const [isShowModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [nickname, setNickname] = useState('');

  const pokemonTypes = detailPokemonState?.data?.types ?? [];
  const pokemonName = detailPokemonState?.data ?? '';
  const pokemonSprites = detailPokemonState?.data?.sprites ?? {};

  useEffect(() => {
    fetchDetailPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDetailPokemon = () => {
    detailPokemonRequest(parsed.pokemonID);
  };

  const catchPokemon = () => {
    setLoading(true);
    setTimeout(() => {
      const number = Math.floor(Math.random() * 10) + 1;
      if (number > 5) {
        setLoading(false);
        setShowModal(true);
      } else {
        setLoading(false);
        message.error('Keep trying!!!');
      }
    }, 3000);
  };

  const savePokemon = () => {
    const pokemonData = {
      nickname,
      pokemon: pokemonName,
    };
    myPokemon.push(pokemonData);
    localStorage.setItem('pokemon', JSON.stringify(myPokemon));
    setShowModal(false);
    window.location.reload();
  };

  const validate = () => {
    const repeated = myPokemon.filter((pokemonData) => {
      return pokemonData.pokemon.name === pokemonName.name;
    }).length;

    if (!repeated) {
      catchPokemon();
    } else {
      message.error('You already owned the pokemon');
    }
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const renderTypes = (types) => (
    <div key={types.type.name} className="badge mr-2">
      {types.type.name}
    </div>
  );

  if (!detailPokemonState.success || isLoading) {
    return <Loader />;
  }

  return (
    <div className="pokemon-detail">
      <div className="d-flex justify-content-between pokemon-name">
        <span>{pokemonName.name}</span>
        <span>#{detailPokemonState.data.order}</span>
      </div>
      <div className="d-flex flex-start">
        {pokemonTypes.map((types) => renderTypes(types))}
      </div>
      <div className="text-center mt-4">
        <img
          src={pokemonSprites.front_default}
          alt="pokeimage"
          className="pokemon-image-wrapper"
          width="60%"
        />
      </div>
      <div className="text-center">
        <ActionButton title="Catch Pokemon!" action={validate} />
      </div>
      <div>
        <div className="pokemon-details">
          <Menus pokemonMoves pokemonPayload={detailPokemonState} />
        </div>
      </div>
      <Modal
        title="You got the Pokemon!!!"
        centered
        width={320}
        visible={isShowModal}
        onOk={savePokemon}
        onCancel={() => setShowModal(false)}
      >
        <div className="text-center">
          <p>Enter your pokemon nickname</p>
          <Input
            maxLength={10}
            placeholder="input with clear icon"
            allowClear
            onChange={handleNickname}
          />
        </div>
      </Modal>
    </div>
  );
}

const mapState = (state) => ({
  detailPokemonState: state.detailPokemonState,
});

export default connect(mapState, null)(DetailsPokemon);
