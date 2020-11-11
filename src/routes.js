import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import InitialRoute from 'InitialRoute';

const ListPokemon = lazy(() => import('containers/list-pokemon/ListPokemon'));
const DetailsPokemon = lazy(() =>
  import('containers/details-pokemon/DetailsPokemon'),
);
const MyPokemon = lazy(() => import('containers/my-pokemon/MyPokemon'));

const Entry = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          <InitialRoute exact path="/" component={ListPokemon} />
          <InitialRoute path="/details-pokemon" component={DetailsPokemon} />
          <InitialRoute path="/my-pokemon" component={MyPokemon} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Entry;
