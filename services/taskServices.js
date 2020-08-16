


var TaskDbRepository = require('../repositories/taskRepository');
var TaskUtilities = require('../utilities/taskUtilities');
const { resolve } = require('path');

const TaskService = {
    'getTaskDetail':  async (req)=>{
        try{
            let response = TaskUtilities.validateGetParams(req);
            if(!response.err){
                let task = await TaskDbRepository.findOne({id: response.task.id, archive: false},'name id description comments');
                delete response.err;
                response.task = JSON.parse(JSON.stringify(task));
                return response;
            }
            return {};
        }catch(err){
            throw err;
        }
    },

    'createTask': async (req)=>{
        try{
            let response = TaskUtilities.validateCreateParams(req);
            if(!response.err){
                let newTask = await TaskDbRepository.insert(response.task);
                return response.task;    
            }
            return {};
        }catch(err){
            throw err;
        }

    },

    'updateTask': async (req)=>{
        try{
            let response = TaskUtilities.validateUpdateParams(req);
            if(!response.err){
                let newTask = ""
                if(response.task && response.task.comments){
                    newTask = await TaskDbRepository.updateOne({id: response.task.id, archive: false}, {'$push' : {'comments': response.task.comments}});
                    delete response.task.comments;
                }
                newTask = await TaskDbRepository.updateOne({id: response.task.id, archive: false}, {'$set' : response.task});
                newTask = await TaskDbRepository.findOne({id: response.task.id}, 'name id description comments');
                response.task = JSON.parse(JSON.stringify(newTask));
                return response.task;    
            }
            return {}
        }catch(err){
            throw err;
        }
    },

    'deleteTask': async (req)=>{
        try{
            let response = TaskUtilities.validateDeleteParams(req);
            if(!response.err){
                let tasks = await TaskDbRepository.updateOne({TaskId: response.Task.id}, {'$set' : {archive : true}});
                return "Task Archived"   
            }
            return ''
        }catch(err){
            throw err;
        }       
    }
}


module.exports = TaskService;