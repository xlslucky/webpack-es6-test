import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import { Home } from './pages/Home';
import { Children } from './pages/Children';
import { Toutiao } from './pages/Toutiao';

import { Test } from './pages/Test';

let app = document.getElementById('app');

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/children',
    component: Children
  },
  {
    path: '/toutiao',
    component: Toutiao
  },
  {
    path: '/test',
    component: Test
  }
]

// ReactDOM.render(<Router history={browserHistory} routes={routes} />, app);
ReactDOM.render(<Router routes={routes} />, app);

// ReactDOM.render(
//   // <Router history={browserHistory} >
//   <Router>
//     <Route path="/" component={Home} />
//     {/* <IndexRoute component={Home} /> */}
//     <Route path="/children" component={Children} />
//     <Route path="/toutiao" component={Toutiao} />
//     <Route path="/test" component={Test} />
//   </Router>,
//   app
// );

// ReactDOM.render(<Home />, app)
