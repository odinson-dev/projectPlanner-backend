var mongo = require('../db/mongo');


//Requring the list schema
var listSchema = require('../schemas/listSchema.js');

//Defining the list model
var ListModel = mongo.model('List', listSchema);



class ListRepository {

    findAll(query, projections){
        return new Promise((resolve, reject)=>{
            ListModel.find(query, projections, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    findOne(query, projections){
        return new Promise((resolve, reject)=>{
            ListModel.findOne(query, projections, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    updateOne(query, updateParams, options){
        return new Promise((resolve, reject)=>{
            ListModel.updateOne(query, updateParams, options, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    updateMany(){
        return new Promise((resolve, reject)=>{
            ListModel.updateMany(query, updateParams, options, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    insert(query){
        return new Promise((resolve, reject)=>{
            ListModel.insertMany(query, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }
}

module.exports = new ListRepository();