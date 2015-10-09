var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors');
var fs = require('fs');
var elasticsearch = require('elasticsearch');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); 

var connectionString = 'localhost:9200'
var _regularindex = "regularindex";
var _secondindex = "secondindex";

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Dexter is listening');
});

var client = new elasticsearch.Client({
	host: connectionString
});

app.post('/search', function(req, res) {
	//console.log(">>> " + req.body.stop + " >>>" + req.body.stem);
	var mytype = '';
	if(req.body.stop == 'no-stop-words' && req.body.stem == 'no-stemming') {
		mytype = 'nothing';
	} else if(req.body.stop == 'no-stop-words' && req.body.stem == 'stemming') {
		mytype = 'stemonly';
	} else if(req.body.stop == 'stop-words' && req.body.stem == 'no-stemming') {
		mytype = 'stoponly';
	} else {
		mytype = 'stopstem';
	}
	
	console.log("terms are " + req.body.terms);
	client.search({
		index: _regularindex, //_secondindex
		type: mytype,
		//analyzer: mytype,
		body: {
			from: 0, 
			size: 100,
			query: {
	            match: {
	            	/*"message": {
	            		"query": req.body.terms,
	            		//"operator": "and",
	            		"zero_terms_query": "all"
	            	}*/
	            	content: req.body.terms
	            }
            }
		}
	}).then(function (resp) {
		res.send(resp.hits.hits);
		/*resp.hits.hits.forEach(function(file) {
			console.log(file);
		});*/
	}, function (err) {
		console.log("something happenned> " + err.message);
	});
});
