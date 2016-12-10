/**
 * Created by amynam on 12/1/2016.
 */

"use strict";

var React =  require ('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function(){
        return(
            <nav className = "navbar navbar - default">
                <div className = "container-fluid">
                    <Link to="app" className=" navbar-brand">
                        <img src = "images/template.jpg">
                        </img>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to ="home">Home</Link></li>
                        <li><Link to = "history">History</Link></li>
                        <li><Link to = "app""/">Log Out</Link></li>
                    </ul>

                </div>
            </nav>
        );
    }
});
module.exports = Header;