$=jQuery=require('jquery');
var React = require('react');
var NavHeaderObject = require('./navigationHeader');
var LoginHeaderObject = require('./loginPageHeader');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function () {
        return(
            <div>
                <Header/>
                <div className=" container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports= app;