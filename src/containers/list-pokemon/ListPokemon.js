import React, { useEffect } from 'react';
import 'styles/App.css';
import { connect } from 'react-redux';
import { listPokemonRequest } from 'redux/reducers/list-pokemon/list-pokemon.api';

import Container from 'layout/Container';
import Loader from 'components/loader/Loader';
import Header from 'layout/Header';
import List from './components/list/List';

function ListPokemon({ listPokemonState }) {
  useEffect(() => {
    listPokemonRequest(10);
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = '#fff';
    } else {
      body.style.backgroundColor = '#fff';
    }
  }, []);

  if (!listPokemonState.success) {
    return <Loader />;
  }

  return (
    <Container>
      <Header />
      <List listPokemon={listPokemonState} />
    </Container>
  );
}

const mapState = (state) => ({
  listPokemonState: state.listPokemonState,
});

export default connect(mapState, null)(ListPokemon);
