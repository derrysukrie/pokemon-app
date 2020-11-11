import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

import 'styles/App.css';
import { connect } from 'react-redux';
import { listPokemonRequest } from 'redux/reducers/list-pokemon/list-pokemon.api';

import { ActionButton } from 'components/buttons';
import Container from 'layout/Container';
import Loader from 'components/loader/Loader';
import Header from 'layout/Header';
import List from './components/list/List';

function ListPokemon({ listPokemonState }) {
  const [showTour, setShowTour] = useState(true);

  useEffect(() => {
    listPokemonRequest(20);
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

  const savePopUp = () => {
    localStorage.setItem('ok', true);
    setShowTour(false);
  };

  const renderModal = () => {
    const alreadyKnow = JSON.parse(localStorage.getItem('ok'));

    return !alreadyKnow ? (
      <Modal
        centered
        closable={false}
        bodyStyle={{ padding: '10px', textAlign: 'center', fontWeight: '600' }}
        visible={showTour}
        width={280}
        footer={false}
        onOk={() => setShowTour(false)}
        // onCancel={() => this.setModal2Visible(false)}
      >
        <span>Click the spinning poke egg to see My Pokemon List</span>
        <div className="pt-1">
          <ActionButton title="Got it" action={savePopUp} />
        </div>
      </Modal>
    ) : null;
  };

  return (
    <Container>
      <Header />
      <List listPokemon={listPokemonState} />
      {renderModal()}
    </Container>
  );
}

const mapState = (state) => ({
  listPokemonState: state.listPokemonState,
});

export default connect(mapState, null)(ListPokemon);
