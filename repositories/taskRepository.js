var mongo = require('../db/mongo');


//Requring the Task schema
var taskSchema = require('../schemas/taskSchema.js');

//Defining the task model
var TaskModel = mongo.model('Task', taskSchema);



class TaskRepository {

    findAll(query){
        return new Promise((resolve, reject)=>{
            TaskModel.find(query, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    findOne(query){
        return new Promise((resolve, reject)=>{
            TaskModel.findOne(query, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    updateOne(query, updateParams, options){
        return new Promise((resolve, reject)=>{
            TaskModel.updateOne(query, updateParams, options, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    updateMany(query, updateParams, options){
        return new Promise((resolve, reject)=>{
            TaskModel.updateMany(query, updateParams, options, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }

    insert(query){
        return new Promise((resolve, reject)=>{
            TaskModel.insertMany(query, function(err, docs){
                if(err){
                    reject(err);
                }
                resolve(docs);
            })
        })
    }
}

module.exports = new TaskRepository();