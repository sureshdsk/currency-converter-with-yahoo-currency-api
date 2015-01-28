# Full tutorial: http://www.idiotinside.com/create-a-currency-converter-in-php-python-javascript-and-jquery-using-yahoo-currency-api/
# Demo: http://www.idiotinside.com/currency-converter/

import urllib2
import json
def currencyConverter(currency_from,currency_to,currency_input):
	yql_base_url = "https://query.yahooapis.com/v1/public/yql"
	yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")'
	yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
	try:
		yql_response = urllib2.urlopen(yql_query_url)
		try:
			yql_json = json.loads(yql_response.read())
			currency_output = currency_input * float(yql_json['query']['results']['rate']['Rate'])
			return currency_output
		except (ValueError, KeyError, TypeError):
			return "JSON format error"

	except IOError, e:
		if hasattr(e, 'code'):
			return e.code
		elif hasattr(e, 'reason'):
			return e.reason

currency_input = 5
currency_from = "USD" # currency codes : http://en.wikipedia.org/wiki/ISO_4217
currency_to = "INR"
rate = currencyConverter(currency_from,currency_to,currency_input)
print rate