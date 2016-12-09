"use strict"

var Request = require("request");
var Cheerio = require("cheerio");

var BestBuyData ={
    GetBestBuyData : function(productName){
    var BestBuyApiKey = "dwg5j4bky4vpvcpsvqt7nbuc";
    var BestBuyApiCall = "https://api.bestbuy.com/v1/products((search="+productName+"))?apiKey="+BestBuyApiKey+"&sort=salePrice.asc&show=salePrice,url&pageSize=1&callback=JSON_CALLBACK&format=json"
    $.ajax({
        url: BestBuyApiCall,
        dataType: "json"
        }
    )
        
}};
module.exports = BestBuyData;