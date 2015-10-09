var fs = require('fs');
var elasticsearch = require('elasticsearch');
var rl = require('readline')
var _regularindex = "regularindex";
var _secondindex = "secondindex";

var client = new elasticsearch.Client({
	host: 'localhost:9200'
});

var bookPath = '';
var motorPath = '';
var baseballPath = '';

//indexar documentos de livros normal
fs.readdir(bookPath, function(err, files) {
	//console.log(files);
	files.forEach(function(file) {
		var ans = fs.readFileSync(bookPath + file, 'utf8')
		client.index({
			index: _regularindex,
			type: 'nothing',
			body: {
				/*title: mytitle,
				author: myauthor,
				content: mycontent*/
				content: ans
			}
		}, function(error, response) {
			console.log(response);
		});
	})
});

//indexar documentos de livros com stopwords
fs.readdir(bookPath, function(err, files) {
	//console.log(files);
	files.forEach(function(file) {
		var ans = fs.readFileSync(bookPath + file, 'utf8')
		client.index({
			index: _regularindex,
			type: 'stoponly',
			body: {
				content: ans
			}
		}, function(error, response) {
			console.log(response);
		});
	})
});

//indexar documentos de livros stem
fs.readdir(bookPath, function(err, files) {
	//console.log(files);
	files.forEach(function(file) {
		var ans = fs.readFileSync(bookPath + file, 'utf8')
		client.index({
			index: _regularindex,
			type: 'stemonly',
			body: {
				content: ans
			}
		}, function(error, response) {
			console.log(response);
		});
	})
});

//indexar documentos de livros com stopwords e stemming
fs.readdir(bookPath, function(err, files) {
	//console.log(files);
	files.forEach(function(file) {
		var ans = fs.readFileSync(bookPath + file, 'utf8')
		client.index({
			index: _regularindex,
			type: 'stopstem',
			body: {
				content: ans
			}
		}, function(error, response) {
			console.log(response);
		});
	})
});

//indexar arquivos sobre baseball normais (140 arquivos)
fs.readdir(baseballPath, function(err, files) {
	console.log("baseball normal");
	files.forEach(function(file) {
		var ans = fs.readFileSync(baseballPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'nothing',//type: 'document',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});

//indexar arquivos sobre baseball com stopwords (140 arquivos)
fs.readdir(baseballPath, function(err, files) {
	console.log("baseball stop");
	files.forEach(function(file) {
		var ans = fs.readFileSync(baseballPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'stoponly',//type: 'document',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});

//indexar arquivos sobre baseball com stemming (140 arquivos)
fs.readdir(baseballPath, function(err, files) {
	console.log("baseball stem");
	files.forEach(function(file) {
		var ans = fs.readFileSync(baseballPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'stemonly',//type: 'document',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});

//indexar arquivos sobre baseball com stemming e stopwords (140 arquivos)
fs.readdir(baseballPath, function(err, files) {
	console.log("baseball stopstem");
	files.forEach(function(file) {
		var ans = fs.readFileSync(baseballPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'stopstem',//type: 'document',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});

//indexar arquivos sobre motorcycle normais (121 arquivos)
fs.readdir(motorPath, function(err, files) {
	console.log("motor");
	files.forEach(function(file) {
		var ans = fs.readFileSync(motorPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'nothing',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});

//indexar arquivos sobre motorcycle com stopwords (121 arquivos)
fs.readdir(motorPath, function(err, files) {
	console.log("motor stop");
	files.forEach(function(file) {
		var ans = fs.readFileSync(motorPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'stoponly',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});

//indexar arquivos sobre motorcycle com stemming (121 arquivos)
fs.readdir(motorPath, function(err, files) {
	console.log("motor stem");
	files.forEach(function(file) {
		var ans = fs.readFileSync(motorPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'stemonly',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});

//indexar arquivos sobre motorcycle stemming e stopwords (121 arquivos)
fs.readdir(motorPath, function(err, files) {
	console.log("motor stopstem");
	files.forEach(function(file) {
		var ans = fs.readFileSync(motorPath + file, 'utf8')
		client.index({
			index: _secondindex,
			type: 'stopstem',
			body: {
				content: ans
			}
		}, function(error, response) {
			//console.log(response);
		});
	})
});
