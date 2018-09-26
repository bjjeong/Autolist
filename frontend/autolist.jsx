import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import {fetchVehicles} from './actions/vehicle_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.dispatch;

  window.fetchVehicles = store.dispatch(fetchVehicles());

  ReactDOM.render(<Root store={store} />, root);
});