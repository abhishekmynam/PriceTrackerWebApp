/**
 * Created by amynam on 12/4/2016.
 */
"use strict";

//This file is mocking a web API by hitting hard coded data.
var products = require('./bestBuyProductData').products;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(product) {
    return product.name;
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var BestBuyApi = {
    getAllProducts: function() {
        return _clone(products);
    },

    getProductsByName: function(name) {
        var product = _.find(products, {name: name});
        return _clone(product);
    },

    saveProduct: function(product) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the product to the DB via AJAX call...');

        if (product.name) {
            var existingProductIndex = _.indexOf(products, _.find(products, {id: products.name}));
            products.splice(existingProductIndex, 1, product);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            product.name = _generateId(product);
            products.push(product);
        }

        return _clone(product);
    },

    deleteproduct: function(name) {
        console.log('Pretend this just deleted the product from the DB via an AJAX call...');
        _.remove(products, { name:name});
    }
};

module.exports = BestBuyApi;