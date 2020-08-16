/*
Filename: mongo.js
Description: A file which defines the database
Author: Nikhil Choubey
Date: 12 Aug 2020
Version: 1.0
*/

const mongoose = require('mongoose');


//Requiring the config for getting the database url
var config = require('../config/config.js');

//  Set up default mongoose connection
let mongoURL = config['databaseUrl'];
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
let db = mongoose.connection;
console.log(mongoURL)
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('close', ()=>{ console.log('Closed the connection')});

module.exports = db;
