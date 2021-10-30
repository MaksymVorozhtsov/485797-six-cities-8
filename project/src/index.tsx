import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {properties} from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App numberOfPlaces='312' offers={properties} />
  </React.StrictMode>,
  document.getElementById('root'));
