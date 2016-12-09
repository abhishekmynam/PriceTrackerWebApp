/**
 * Created by amynam on 11/30/2016.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler)
{
    React.render(<Handler/>, document.getElementById('app'));
});
