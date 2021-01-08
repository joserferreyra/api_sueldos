const entityapi = require('../db_apis/entity');
const mapper = require('../config/mapper');
const mapperViews = require('../config/mapperViews');
const viewliqapi = require('../db_apis/viewLiq');
const spmapper = require('../config/spmapper');
const fnmapper = require('../config/fnmapper');
const spapi = require('../db_apis/sp');
const fnapi = require('../db_apis/fn');

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

async function del(req, res, next) {
    try {
        let entityName = req.path.substring(1,);

        let context = getEntityValues(req, mapper.jsonEntityMap[entityName].fields);

        let result = await entityapi.remove(context, mapper.jsonEntityMap[entityName]);

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

async function getLiqView(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.query;

        let entityName = 'personaCargoLiq';

        if (mapperViews.jsonViewMap[entityName]) {
            result = await viewliqapi.getLiq(context, mapperViews.jsonViewMap[entityName]);            
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

async function execSP(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.query;

        let spName = req.path.substring(4,);
        //console.log(spName);

        if (spmapper.jsonStoreProcedure[spName]) {
            result = await spapi.execStoreProcedure(context, spmapper.jsonStoreProcedure[spName]);            
        }

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }
}

async function execFN(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.query;

        let spName = req.path.substring(4,);

        if (fnmapper.jsonStoreFunction[spName]) {
            result = await fnapi.execFn(context, fnmapper.jsonStoreFunction[spName]);            
        }

        const val = result?res.status(200).json(result):res.status(404).end();

        return val;

    } catch (err) {
        next(err);
    }
}

module.exports.execSP = execSP;
module.exports.execFN = execFN;

module.exports.getPersonaCargoLiq = getLiqView;

module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
module.exports.del = del;