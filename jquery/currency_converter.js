// Full tutorial: http://www.idiotinside.com/create-a-currency-converter-in-php-python-javascript-and-jquery-using-yahoo-currency-api/
// Demo: http://www.idiotinside.com/currency-converter/

jQuery(document).ready(function($) {

    var currency_input = 5;
    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "INR";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    var op_data =0;

    $.get( yql_query_url, function( data ) {
        op_data = data.query.results.rate.Rate;
        console.log(op_data);
    });

});