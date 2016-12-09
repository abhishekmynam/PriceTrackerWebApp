/**
 * Created by amynam on 12/1/2016.
 */

"use strict";

var React =  require ('react');

var Header = React.createClass({
    render: function(){
        return(
            <nav className = "navbar navbar - default">
                <div className = "container-fluid">
                    <a href="/" className=" navbar-brand">
                        <img src = "images/template.jpg">
                        </img>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href = "/#home">Home</a></li>
                        <li><a href = "/#history">History</a></li>
                        <li><a href = "/">Log Out</a></li>
                    </ul>

                </div>
            </nav>
        );
    }
});
module.exports = Header;