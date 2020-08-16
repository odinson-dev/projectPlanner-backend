/**
 * Filename: taskController.js
 * Description: This file contains controllers for creating, updating, deleting, task
 * Author: Nikhil Choubey
 * Version: 1.0
 * Date: 12 Aug 2020
 */



 var TaskServices = require('../services/taskServices.js');


 const TaskController = {
     'get' : async (req, res)=>{
         try{
            let response = await TaskServices.getTaskDetails(req);
            let message = "No task found with this ID";
            let statusCode = 400;
            if(response.id, response.title){
                statusCode = 200;
                message = response;
            }
            res.status(statusCode).send({message: message});
         }catch(e){
            res.status(403).send({'message' : "Please check the service"})
         }
     },

     'create': async (req,res)=>{
        try{
            let response = await TaskServices.createTask(req);
            let message = "Operation not permitted";
            let statusCode = 403;
            if(response.id && response.name){
                statusCode = 200;
                message = response;
            }
            res.status(statusCode).send({message: message});
         }catch(e){
             console.log(e);
            res.status(403).send({'message' : "Please check the service"})
         }
     },

     'update': async (req,res)=>{
        try{
            let response = await TaskServices.updateTask(req);
            let message = "Operation not permitted";
            console.log(response)
            let statusCode = 403;
            if(response.id && response.name){
                statusCode = 200;
                message = response;
            }
            res.status(statusCode).send({message: message});
         }catch(e){
            res.status(403).send({'message' : "Please check the service"})
         }
     },

     'delete': async (req,res)=>{
        try{
            let response = await TaskServices.deleteTask(req);
            let message = "Operation not permitted";
            let statusCode = 403;
            if(response){
                statusCode = 200;
                message = "Task deleted";
            }
            res.status(statusCode).send({message: message});
         }catch(e){
            res.status(403).send({'message' : "Please check the service"})
         }
     },

 }


 module.exports = TaskController;