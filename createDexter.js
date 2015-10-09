var elasticsearch = require('elasticsearch');

var _regularindex = "regularindex";
var _secondindex = "secondindex";

var client = new elasticsearch.Client({
	host: 'localhost:9200'
});

//criação de indices regularindex
client.indices.create({
	index: _regularindex,
	body: {
		"mappings": {
			"nothing": {
				"properties": {
					content: { "type": "string", "store": true, "index": "analyzed", "index_analyzer": "default", "search_analyzer": "default" }
				}
			},
			"stoponly": {
				"properties": {
					content: { "type": "string", "store": true, "index_analyzer": "stopp", "search_analyzer": "stopp", "index": "analyzed" }
				}
			},
			"stemonly": {
				"properties": {
					content: { "type": "string", "store": true, "index_analyzer": "stem", "search_analyzer": "stem", "index": "analyzed"}
				}
			},
			"stopstem": {
				"properties": {
					content: { "type": "string", "store": true, "index_analyzer": "stop_stem", "search_analyzer": "stop_stem", "index": "analyzed" }
				}
			}
		},
		"settings": {
			"analysis": {
				"filter": {
					"my_stem": { "type": "stemmer", "name": "english" },//"type": "stemmer_override", "rules": ["morning=>morn", "mornings=>morn"]
					"my_stop": { "type": "stop", "stopwords": "_english_" }
				},
				"analyzer": {
					"stop_stem": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding", "my_stem", "my_stop"] },
					"stopp": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding", "my_stop"] },
					"stem": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding", "my_stem"] },
					"default": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding"] }
				}
			}
			
		}
	}
	
});

//criação de index secondindex
client.indices.create({
	index: _secondindex,
	body: {
		"mappings": {
			"nothing": {
				"properties": {
					content: { "type": "string", "store": true, "index": "analyzed", "index_analyzer": "default", "search_analyzer": "default" }
				}
			},
			"stoponly": {
				"properties": {
					content: { "type": "string", "store": true, "index_analyzer": "stopp", "search_analyzer": "stopp", "index": "analyzed" }
				}
			},
			"stemonly": {
				"properties": {
					content: { "type": "string", "store": true, "index_analyzer": "stem", "search_analyzer": "stem", "index": "analyzed"}
				}
			},
			"stopstem": {
				"properties": {
					content: { "type": "string", "store": true, "index_analyzer": "stop_stem", "search_analyzer": "stop_stem", "index": "analyzed" }
				}
			}
		},
		"settings": {
			"analysis": {
				"filter": {
					"my_stem": { "type": "stemmer", "name": "english" },//"type": "stemmer_override", "rules": ["morning=>morn", "mornings=>morn"]
					"my_stop": { "type": "stop", "stopwords": "_english_" }
				},
				"analyzer": {
					"stop_stem": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding", "my_stem", "my_stop"] },
					"stopp": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding", "my_stop"] },
					"stem": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding", "my_stem"] },
					"default": { "type": "custom", "tokenizer": "standard", "filter": ["lowercase", "asciifolding"] }
				}
			}
			
		}
	}
	
});
