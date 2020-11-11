import React, { useEffect } from 'react';
import Container from 'layout/Container';
import MyList from './components/my-list/MyList';

function MyPokemon() {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = '#fff';
    } else {
      body.style.backgroundColor = '#fff';
    }
  }, []);

  return (
    <Container>
      <MyList />
    </Container>
  );
}

export default MyPokemon;
