/**
 * Filename: listController.js
 * Description: This file contains controllers for creating, updating, deleting, List
 * Author: Nikhil Choubey
 * Version: 1.0
 * Date: 12 Aug 2020
 */



var ListServices = require('../services/listServices.js');


const ListController = {
    'get' : async (req, res)=>{
        try{
           let response = await ListServices.getLists(req);
           let message = "No List found";
           let statusCode = 400;
           if(response.length){
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
           let response = await ListServices.createList(req);
           console.log(response)
           let message = "Operation not permitted";
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

    'update': async (req,res)=>{
       try{
           let response = await ListServices.updateList(req);
           let message = "Operation not permitted";
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
           let response = await ListServices.deleteList(req);
           let message = "Operation not permitted";
           let statusCode = 403;
           if(response){
               statusCode = 200;
               message = "List deleted";
           }
           res.status(statusCode).send({message: message});
        }catch(e){
           res.status(403).send({'message' : "Please check the service"})
        }
    },

}


module.exports = ListController;