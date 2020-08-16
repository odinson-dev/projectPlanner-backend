


var ListDbRepository = require('../repositories/listRepository');
var TaskDbRepository = require('../repositories/taskRepository');
var ListUtilities = require('../utilities/listUtilities');
const { resolve } = require('path');

const ListService = {
    'getLists':  async (req)=>{
        try{
            let lists = await ListDbRepository.findAll({archive: false}, 'name id');
            lists = JSON.parse(JSON.stringify(lists))
            for(let list of lists){
                let tasks = await TaskDbRepository.findAll({listId: list.id},'name id descirption comments');
                list['tasks'] = tasks;
            }
            return lists;
        }catch(err){
            throw err;
        }
    },

    'createList': async (req)=>{
        try{
            let response = ListUtilities.validateCreateParams(req);
            if(!response.err){
                let newList = await ListDbRepository.insert(response.list);
                return response.list;    
            }
            return {};
        }catch(err){
            throw err;
        }

    },

    'updateList': async (req)=>{
        try{
            let response = ListUtilities.validateUpdateParams(req);
            if(!response.err){
                let newList = await ListDbRepository.updateOne({id: response.list.id, archive: false}, {'$set' : {name : response.list.name}}, {upsert: true});
                return response.list;    
            }
            return {}
        }catch(err){
            throw err;
        }
    },

    'deleteList': async (req)=>{
        try{
            let response = ListUtilities.validateDeleteParams(req);
            if(!response.err){
                let newList = await ListDbRepository.updateOne({id: response.list.id}, {'$set' : {archive : true}});
                let tasks = await TaskDbRepository.updateMany({listId: response.list.id}, {'$set' : {archive : true}});
                return "List Archived"   
            }
            return ''
        }catch(err){
            throw err;
        }       
    }
}


module.exports = ListService;