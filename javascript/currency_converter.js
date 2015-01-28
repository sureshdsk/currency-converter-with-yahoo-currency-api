// Full tutorial: http://www.idiotinside.com/create-a-currency-converter-in-php-python-javascript-and-jquery-using-yahoo-currency-api/
// Demo: http://www.idiotinside.com/currency-converter/

function httpGet(theUrl){
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }
function currencyConverter(currency_from,currency_to,currency_input){
    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    var http_response = httpGet(yql_query_url);
    var http_response_json = JSON.parse(http_response);
//console.log(http_response);

    return http_response_json.query.results.rate.Rate;
    }
var currency_input = 5;
var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
var currency_to = "INR";
var rate = currencyConverter(currency_from,currency_to,currency_input);
console.log(rate);
