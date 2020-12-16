const entityapi = require('../db_apis/entity');
const mapper = require('../config/mapper');

// private func

function getEntityValues(req, entity) {    //    //
    let object = {};
    for (const key in entity) {
        if (typeof entity[key] != object) {
            if (req.body[key] != undefined) {
                //if (typeof req.body[key] == Date){                    //
;                //}
                object[key] = req.body[key];
            }
        }
    }    //
    return object;
}

// public func
async function get(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.query;

        let entityName = req.path.substring(1,);

        if (mapper.jsonEntityMap[entityName]) {
            result = await entityapi.find(context, mapper.jsonEntityMap[entityName]);            
        }

        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }
}

async function post(req, res, next) {
    try {
        let entityName = req.path.substring(1,);

        let context = getEntityValues(req, mapper.jsonEntityMap[entityName].fields);

        let result = await entityapi.create(context, mapper.jsonEntityMap[entityName]);
        
        if (result) {
            result.rows = [req.body];
            res.status(result.status).json(result);
        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }
}

async function put(req, res, next) {
    try {
        let entityName = req.path.substring(1,);

        let context = getEntityValues(req, mapper.jsonEntityMap[entityName].fields);

        let result = await entityapi.modify(context, mapper.jsonEntityMap[entityName]);

        if (result) {            
            if (result.err){
                res.status(result.status).end();
            }else{
                result.rows = [req.body];
                res.status(200).json(result);    
            }            
        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.put = put;