var fs = require('fs');
var elasticsearch = require('elasticsearch');

var _myindex = "regularindex";
var _secondindex = "secondindex";

var client = new elasticsearch.Client({
	host: 'localhost:9200'
});

client.indices.delete({index:_myindex});
client.indices.delete({index:_secondindex});
