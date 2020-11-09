import React from 'react';
import ReactDOM from 'react-dom';
import Entry from 'routes';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Data from './redux/reducers/root';

import 'styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Data.store}>
      <Entry />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
