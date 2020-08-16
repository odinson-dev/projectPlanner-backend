/*
Filename: listModel.js
Description: A file which defines the mongoose schema for list
Author: Nikhil Choubey
Date: 14 Aug 2020
Version: 1.0
*/

//Requiring mongoose for defining the schema
var mongoose = require('mongoose');

let ListModel = new mongoose.Schema({
    id:{type: String, required: true},
    name:{type: String, required: true},
    archive:{type: Boolean, default: false},
    
}, {timestamps : {createdAt: 'created', updatedAt: 'updated'}});




module.exports = ListModel;
