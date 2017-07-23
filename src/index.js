import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import { Home } from './pages/Home';
import { Children } from './pages/Children';

let app = document.getElementById('app');

ReactDOM.render(
  // <Router history={browserHistory} >
  <Router>
    <Route path="/" component={Home} />
    <Route path="/children" component={Children} />
  </Router>, 
  app
);

// ReactDOM.render(<Home />, app)