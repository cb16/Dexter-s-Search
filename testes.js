var es = require('elasticsearch');

var client = new es.Client({
	host: 'localhost:9200'
});

var _myindex = 'regularindex';

//client.indices.delete({index:_myindex});


client.indices.analyze({
	"analyzer": "stopp",
	index: _myindex,
	//type: 'stemonly',
	text: "eleven-year-old"
}, function(error, response, status) {
	console.log(response);
});

/*client.search({
	index: _myindex,
	type: 'nothing',
	//analyzer: 'stem',
	body: {
		query: {
            match: {
            	content: 'sisterhood'
            }
        }
	}
}, function(error, response) {
	response.hits.hits.forEach(function(file) {
		console.log(file._source);
	});
});*/