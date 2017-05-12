import React from 'karet';
import * as U from 'karet.util';
import ReactDOM from 'react-dom';

import App from './app';
import './index.css';
import data from './data';

const state = U.atom(data);

state.log('state');

ReactDOM.render(
  <App state={state} />,
  document.getElementById('root')
);
