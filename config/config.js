/*
Filename: config.js
Description: A file which defines the different configuration needed for express app in different running environment
Author: Nikhil Choubey
Date: 12 aug 2020
*/
config = {

	//Development environment configurations
	'development' : {
		'port'     : 3024,
		'databaseUrl' : 'mongodb://nikhil:vastoc-4bybQo-cybguh@greyorangeassignment-shard-00-00.qjalc.mongodb.net:27017,greyorangeassignment-shard-00-01.qjalc.mongodb.net:27017,greyorangeassignment-shard-00-02.qjalc.mongodb.net:27017/greyorange?ssl=true&replicaSet=atlas-lly2ol-shard-0&authSource=admin&retryWrites=true&w=majority'
	},

	//Proudction environment configurations
	'production' : {
		'port' : 3024,
		'databaseUrl' : 'mongodb://nikhil:vastoc-4bybQo-cybguh@greyorangeassignment-shard-00-00.qjalc.mongodb.net:27017,greyorangeassignment-shard-00-01.qjalc.mongodb.net:27017,greyorangeassignment-shard-00-02.qjalc.mongodb.net:27017/greyorange?ssl=true&replicaSet=atlas-lly2ol-shard-0&authSource=admin&retryWrites=true&w=majority'
	},
	'sandbox' : {
		'port' : 3024,
		'databaseUrl' : 'mongodb://nikhil:vastoc-4bybQo-cybguh@greyorangeassignment-shard-00-00.qjalc.mongodb.net:27017,greyorangeassignment-shard-00-01.qjalc.mongodb.net:27017,greyorangeassignment-shard-00-02.qjalc.mongodb.net:27017/greyorange?ssl=true&replicaSet=atlas-lly2ol-shard-0&authSource=admin&retryWrites=true&w=majority'
	},
	'test'       : {
		'port'     : 3021,
		'databaseUrl' : 'mongodb://localhost:27017/test'
	}
}

module.exports = config[process.env.NODE_ENV]
