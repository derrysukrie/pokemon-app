import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import InitialRooute from 'InitialRoute';

const ListPokemon = lazy(() => import('containers/list-pokemon/ListPokemon'));

const Entry = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          <InitialRooute exact path="/" component={ListPokemon} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Entry;
