import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.scss';

import { Landing, MyTeams } from '@containers';
import App from './App';

const destination = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Landing}/>
      <Route path="/myteams" component={MyTeams}/>
      <Route path="/login" component={Landing}/>
    </App>
  </BrowserRouter>, destination
);
registerServiceWorker();
