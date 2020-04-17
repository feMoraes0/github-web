import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './screens/login';
import Home from './screens/home';
import Repositories from './screens/repositories';
import Followers from './screens/followers';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/repositories'>
          <Repositories />
        </Route>
        <Route path='/followers'>
          <Followers />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
