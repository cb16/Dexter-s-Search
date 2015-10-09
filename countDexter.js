var es = require('elasticsearch');

var client = new es.Client({
	host: 'localhost:9200'
});

var _regularindex = 'regularindex';
var _secondindex = 'secondindex';

client.count({
	index: _regularindex
}, function(error, response) {
	console.log("regular: " + response._source);
});

client.count({
	index: _secondindex
}, function(error, response) {
	console.log("second: " + response._source);
});
