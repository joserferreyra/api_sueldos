const entityapi = require('../db_apis/entity');
const mapper = require('../config/mapper');
const mapperViews = require('../config/mapperViews');
const viewapi = require('../db_apis/view');

const repomapper = require('../config/repomapper.js')
const spmapper = require('../config/spmapper');
const fnmapper = require('../config/fnmapper');
const spapi = require('../db_apis/sp');
const fnapi = require('../db_apis/fn');
const repoapi = require('../db_apis/repo');

const xlsxapi = require('../db_apis/xlsx');
//var URL = require('url');

// private func

function getEntityValues(req, entity) {
    let object = {};
    for (const key in entity) {
        if (typeof entity[key] != object) {
            if (req.body[key] != undefined) {
                //if (typeof req.body[key] == Date){}
                object[key] = req.body[key];
            }
        }
    }
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
            if (result.err) {
                res.status(result.status).end();
            } else {
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
            if (result.err) {
                res.status(result.status).end();
            } else {
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

async function getView(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.query;

        //let entityName = 'personaCargoLiq';
        let entityName = req.path.substring(6,);
        //console.log(entityName);

        if (mapperViews.jsonViewMap[entityName]) {
            result = await viewapi.getView(context, mapperViews.jsonViewMap[entityName]);
        }

        if (result && result.rows.length > 0) {
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

        context = req.body;
        //console.log(req);

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
        //console.log(err);
        next(err);
    }
}

async function execFN(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.body;
        //context = req.query;

        let spName = req.path.substring(4,);

        if (fnmapper.jsonStoreFunction[spName]) {
            result = await fnapi.execFn(context, fnmapper.jsonStoreFunction[spName]);
        }

        const val = result ? res.status(200).json(result) : res.status(404).end();

        return val;

    } catch (err) {
        next(err);
    }
}

async function getProc(req, res, next) {
    try {
        let context = {};
        let result = {};

        context = req.query;
        //context = req.body;

        //let spName = req.path.substring(6,);
        //console.log(spName);

        //if (spmapper.jsonStoreProcedure[spName]) {
        //result = spmapper.jsonStoreProcedure[spName];
        // console.log(result);        
        //}

        //const val = result?res.status(200).json(result):res.status(404).end();
        result = spmapper.jsonStoreProcedure;
        const val = result ? res.status(200).json(result) : res.status(404).end();

        return val;

        //return result;

    } catch (err) {
        next(err);
    }
}

async function getFunc(req, res, next) {
    try {

        let result = fnmapper.jsonStoreFunction;
        const val = result ? res.status(200).json(result) : res.status(404).end();

        return val;

    } catch (err) {
        next(err);
    }
}

async function getEntities(req, res, next) {
    try {

        let result = mapper.jsonEntityMap;
        const val = result ? res.status(200).json(result) : res.status(404).end();

        return val;

    } catch (err) {
        next(err);
    }
}

async function getViews(req, res, next) {
    try {

        let result = mapperViews.jsonViewMap;
        const val = result ? res.status(200).json(result) : res.status(404).end();

        return val;

    } catch (err) {
        next(err);
    }
}


async function getReps(req, res, next) {
    try {

        let result = repomapper.jsonReportes;
        const val = result ? res.status(200).json(result) : res.status(404).end();

        return val;

    } catch (err) {
        next(err);
    }
}

async function getRepo(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.query;

        //let entityName = 'personaCargoLiq';
        let repoName = req.path.substring(6,);
        //console.log(entityName);

        if (repomapper.jsonReportes[repoName]) {
            result = await repoapi.getRepo(context, repomapper.jsonReportes[repoName]);
        }

        if (result && result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }
}

function yyyymmdd() {
    function twoDigit(n) { return (n < 10 ? '0' : '') + n; }

    var now = new Date();
    return '' + now.getFullYear() + twoDigit(now.getMonth() + 1) + twoDigit(now.getDate());
}

async function getxlsx(req, res, next) {
    //var url = URL.parse(req.url, true);
    let context = {};
    let result;

    context = req.query;
    let repoName = req.path.substring(6,);

    //console.log(context, repoName);

    if (repomapper.jsonReportes[repoName]) {
        result = await repoapi.getRepo(context, repomapper.jsonReportes[repoName]);
        let file = xlsxapi.get_file(result.rows);

        let fileName = yyyymmdd() + '_' + repoName + '.xlsx';

        res.setHeader('Content-Length', file.length);
        res.setHeader('Content-Type', 'application/xlsx');
        res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
        res.write(file);
        res.end();

    }else{
        res.status(404).end();
    }

    /*if (result && result.rows.length > 0) {
        res.status(200).json(result.rows);
    } else {
        
    }*/

}

module.exports.getEntities = getEntities;
module.exports.execSP = execSP;
module.exports.execFN = execFN;
module.exports.getProc = getProc;
module.exports.getFunc = getFunc;
module.exports.getRepo = getRepo;

module.exports.getView = getView;
module.exports.getViews = getViews;
module.exports.getReps = getReps;

module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
module.exports.del = del;

module.exports.getxlsx = getxlsx;