import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import Main from '../Main.jsx'
import Home from '../Home.jsx'

// var Router = ReactRouter.Router
// var Route = ReactRouter.Route
// var hashHistory = ReactRouter.hashHistory;
// var IndexRoute = ReactRouter.IndexRoute;


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} />
    <Route path='/about' component={Home} />
  </Router>
);

module.exports = routes;