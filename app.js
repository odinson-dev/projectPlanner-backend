/*
Filename: app.js
Description: The main file which starts and express server with registered routes
Author: Nikhil Choubey
Date: 12 Aug 2020
Version: 1.0
*/


var express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');



var logger = require('./logger/logger');



const appConfig = require('./config/config');



const ListRoutes = require('./routes/listRoutes');
const TaskRoutes = require('./routes/taskRoutes');



const app = express();



var rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
       req.rawBody = buf.toString('utf8');
     }
   }
app.use(bodyParser.json({limit: '50mb', verify : rawBodySaver}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, verify: rawBodySaver}));
app.use(bodyParser.raw({limit: '50mb', verify: rawBodySaver, type: function () { return true } }))


app.use(morgan('combined', {stream : logger.stream}));


app.use(function (req, res, next) {
    // set language header for app
    req.headers['lang'] = (req.headers.lang) ? req.headers.lang : 'en-US';
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });


  app.use('/list', ListRoutes);
  app.use('/task', TaskRoutes);




app.listen(appConfig['port'], ()=> logger.info(`Server started at ${appConfig['port']}`))