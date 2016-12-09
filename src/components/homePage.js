/**
 * Created by amynam on 11/30/2016.
 */

"use strict";

var React =  require ('react');
var BestBuyApi = require ('../api/test_bestbuydatajson');  //('../api/apisToConnect');
var ProductList = require('../api/allProducts');

var Home = React.createClass({
    propTypes:{
      products: React.PropTypes.array.isRequired
    },
    getInitialState: function () {
      return{
          products:[]
      };
    },
    componentDidMount: function(){
      if(this.isMounted()) {
          this.setState({products: BestBuyApi.getAllProducts()});
      }
    },
    render: function(){
        return(
            <div>
                <div2 className = "jumbotron">
                    <h1> Price Tracker Home </h1>
                </div2>
                <ProductList products = {this.state.products}/>
            </div>
    );
    }
});


module.exports = Home;

