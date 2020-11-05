import { createStore, applyMiddleware, compose } from 'redux';

export default (rootReducer) => {
  const middleware = [];
  const enhancers = [];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name,
          // ctionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer(), composeEnhancers(...enhancers));

  return { store };
};
