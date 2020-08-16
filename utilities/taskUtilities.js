

var UUID = require('./generateUuid');




const TaskUtilities = {
    
    'validateGetParams': (req)=>{
        let response = {'err' : 'Id missing in params', 'task' : {}};
        if(req.query.id){
            delete response.err;
            response['task']['id'] = req.body.id;
        }
        return response;
    },

    'validateCreateParams' : (req)=>{
        let response = {'err' : 'Name missing in params', 'task' : {}};
        if(req.body.name, req.body.listId){
            delete response.err;
            response['task']['name'] = req.body.name;
            response['task']['listId'] = req.body.listId;
        }
        response.task.id = UUID.uuid();
        return response;
    },

    'validateUpdateParams': (req)=>{
        let response = {'err' : 'ID missing in params', 'task' : {}};
        if(req.body.id){
            delete response.err;
            response['task']['id'] = req.body.id;
        }
        if(req.body.name){
            response['task']['name'] = req.body.name;
        }
        if(req.body.description){
            response['task']['description'] = req.body.description;
        }
        if(req.body.comments){
            response['task']['comments'] = req.body.comments;
        }
        if(req.body.listId){
            response['task']['listId'] = req.body.listId;
        }
        return response;
    },


    'validateDeleteParams' : (req)=>{
        let response = {'err' : 'Id missing in params', 'task' : {}};
        if(req.body.id){
            delete response.err;
            response['task']['id'] = req.body.id;
        }
        return response;
    }

}


module.exports = TaskUtilities;