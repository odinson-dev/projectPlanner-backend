/*
Filename: listModel.js
Description: A file which defines the mongoose schema for task
Author: Nikhil Choubey
Date: 14 Aug 2020
Version: 1.0
*/

//Requiring mongoose for defining the schema
var mongoose = require('mongoose');

let TaskModel = new mongoose.Schema({
    id:{type: String, required: true},
    name:{type: String, required: true},
    listId:{type: String, required: true},
    description: {type:String},
    comments:[{type:String}],
    archive:{type: Boolean, default: false},

}, {timestamps : {createdAt: 'created', updatedAt: 'updated'}});




module.exports = TaskModel;
