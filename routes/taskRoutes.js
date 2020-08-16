/**
 * Filename: taskRoute.js
 * Description: This file contains routes for creating, updating, deleting, task
 * Author: Nikhil Choubey
 * Version: 1.0
 * Date: 12 Aug 2020
 */


var express = require('express'); 
var router = express.Router();

var Controller= require('../controller/taskController.js');

router.get('/get', function(req, res){
    Controller.get(req, res);
});


router.post('/create', function(req, res){
    Controller.create(req, res);
});

router.put('/update', function(req, res){
    Controller.update(req, res);
});


router.delete('/delete', function(req,res){
    Controller.delete(req, res);
});


module.exports = router;