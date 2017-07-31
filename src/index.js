import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import { Home } from './pages/Home';
import { Children } from './pages/Children';
import { Toutiao } from './pages/Toutiao';

let app = document.getElementById('app');

ReactDOM.render(
  // <Router history={browserHistory} >
  <Router>
    <Route path="/" component={Home} />
    <Route path="/children" component={Children} />
    <Route path="/toutiao" component={Toutiao} />
  </Router>, 
  app
);

// ReactDOM.render(<Home />, app)