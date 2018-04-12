import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';

import { Landing } from '@containers';

const destination = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Landing}/>
    </App>
  </BrowserRouter>, destination
);
registerServiceWorker();
