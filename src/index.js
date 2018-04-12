import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.scss';

import { Landing } from '@containers';
import App from './App';

const destination = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Landing}/>
      <Route path="/login" component={Landing}/>
    </App>
  </BrowserRouter>, destination
);
registerServiceWorker();
