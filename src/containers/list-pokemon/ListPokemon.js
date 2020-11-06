import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'layout/Container';
import 'styles/App.css';
import Header from 'layout/Header';
import { cartDataRequest } from 'redux/reducers/list-pokemon/list-pokemon.api';
import List from './components/list/List';

function ListPokemon({ listPokemonState }) {
  useEffect(() => {
    cartDataRequest(10);
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = '#fff';
    } else {
      body.style.backgroundColor = '#fff';
    }
  }, []);

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
