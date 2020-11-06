import Data from 'redux/reducers/root';

export default function dispatch(action) {
  // eslint-disable-next-line no-unused-expressions
  Data.store && Data.store.dispatch(action);
}
