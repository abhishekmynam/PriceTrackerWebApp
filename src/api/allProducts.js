/**
 * Created by amynam on 11/30/2016.
 */

"use strict";

var React =  require ('react');

var productList = React.createClass({

    render: function(){
        var createProductRow = function(product){
            return(
                <tr key={product.name}>
                    <td><a href ={"/#home"+product.name}>{product.name}</a> </td>
                    <td>{product.price}</td>
                    <td>{product.url}</td>
                </tr>
            )
        };
        return(
            <div>
                <table className="table">
                    <thead>
                    <th>Product</th>
                    <th>Price</th>
                    <th>url</th>
                    </thead>
                    <tbody>
                    {this.props.products.map(createProductRow,this)}
                    </tbody>
                </table>
            </div>
        );
    }
});


module.exports = productList;

/**
 * Created by amynam on 12/5/2016.
 */
