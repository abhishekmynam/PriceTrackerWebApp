"use strict";

var React =  require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/')}>
        <DefaultRoute handler={require('./components/loginPage')}/>
        <Route name= "home" handler={require('./components/homePage')}/>
        <Route name= "history" handler={require('./components/history')}/>
    </Route>
);
module.exports = routes;