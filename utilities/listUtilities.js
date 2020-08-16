

var UUID = require('./generateUuid');

const ListUtilities = {
    
    'validateCreateParams' : (req)=>{
        let response = {'err' : 'Name missing in params', 'list' : {}};
        if(req.body.name){
            delete response.err;
            response['list']['name'] = req.body.name;
        }
        response.list.id = UUID.uuid();
        return response;
    },

    'validateUpdateParams': (req)=>{
        let response = {'err' : 'Missing parameter for update please check request', 'list' : {}};
        if(req.body.name && req.body.id){
            delete response.err;
            response['list']['name'] = req.body.name;
            response['list']['id'] = req.body.id;
        }
        return response;
    },


    'validateDeleteParams' : (req)=>{
        let response = {'err' : 'Id missing in params', 'list' : {}};
        if(req.body.id){
            delete response.err;
            response['list']['id'] = req.body.id;
        }
        return response;
    }

}


module.exports = ListUtilities;