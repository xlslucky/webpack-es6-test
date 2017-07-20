import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import { Home } from './pages/Home'

let app = document.getElementById('app');

class Children extends Component {
  render() {
    return (
      <div>
        我是Children
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={Home} />
    <Route path="/children" component={Children} />
  </Router>, 
  app
);