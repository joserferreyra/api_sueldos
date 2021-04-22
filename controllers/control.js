const oracledb = require('oracledb');
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

var fs = require('fs');
var path = require('path');
const { simpleExecute, getConnection } = require('../services/database');
const database = require('../config/database');
//var URL = require('url');

// private func

function getEntityArrayValues(req, entity) {
    let object = {};

    entity.forEach(element => {
        if (req.body[element] != undefined) {
            object[element] = req.body[element];
        }
    });

    return object;
}

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

    let context = {};
    let result;

    context = req.query;
    let repoName = req.path.substring(6,);

    if (repomapper.jsonReportes[repoName]) {
        result = await repoapi.getRepo(context, repomapper.jsonReportes[repoName]);
        let file = xlsxapi.get_file(result.rows);

        let fileName = yyyymmdd() + '_' + repoName + '.xlsx';

        res.setHeader('Content-Length', file.length);
        res.setHeader('Content-Type', 'application/xlsx');
        res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
        res.write(file);
        res.end();

    } else {
        res.status(404).end();
    }

}

async function getTXT(req, res, next) {
    try {
        let context = {};
        let result;

        context = req.query;

        let entityName = req.path.substring(5,);

        if (mapperViews.jsonViewMap[entityName]) {
            result = await viewapi.getView(context, mapperViews.jsonViewMap[entityName]);
        }

        if (result && result.rows.length > 0) {

            let content = result.rows;
            let txt = new String();

            let ban = true;
            let fileName = '';

            content.forEach(element => {
                if (ban) {
                    if (element['NOMBREARCHIVO']) {
                        fileName = element['NOMBREARCHIVO'];
                    }
                    ban = false;
                }
                txt = txt + element['CADENA'].toString() + '\n';
            });

            const buf = Buffer.from(txt, 'latin1');

            if (!fileName) {
                fileName = yyyymmdd() + '_' + entityName + '.txt';
            }

            res.setHeader('Content-Length', buf.length);
            res.setHeader('Content-Type', 'application/text');
            res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
            res.write(buf);
            res.end();

        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }
}

async function getTXTipsst(req, res, next) {

    try {
        let context = {};
        let result;

        context = req.query;

        let entityName = req.path.substring(5,);
        //console.log(entityName);

        if (mapperViews.jsonViewMap[entityName]) {
            result = await viewapi.getView(context, mapperViews.jsonViewMap[entityName]);
        }

        if (result && result.rows.length > 0) {

            let content = result.rows;
            let txt = new String();

            content.forEach(element => {
                txt = txt + element['CADENA'].toString() + '\n';
            });

            const buf = Buffer.from(txt, 'latin1');

            let mes = result.params['Periodo'].toString();
            console.log(mes);

            let fileName = yyyymmdd() + '_' + entityName + '.' + mes;

            res.setHeader('Content-Length', buf.length);
            res.setHeader('Content-Type', 'application/text');
            res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
            res.write(buf);
            res.end();

        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }

}

async function getCursorFromSP(req, res, next) {
    try {

        let result;

        let spName = req.path.substring(11,);

        let context = getEntityArrayValues(req, spmapper.jsonStoreProcedure[spName].in_param);

        const query = spapi.getSQLcall(spmapper.jsonStoreProcedure[spName]);
        const binds = spapi.getSQLbinds(context, spmapper.jsonStoreProcedure[spName]);

        //console.log(query);
        //console.log(binds);

        if (spmapper.jsonStoreProcedure[spName]) {

            let conn = await getConnection();
            
            result = await conn.execute(query, binds);
            
            let txt = '';

            const rs = result.outBinds.Cursor;
            let row;
            let i = 1;
            
            while ((row = await rs.getRow())) {
              //console.log("getRow(): row " + i++);
              //console.log(row);
              txt = txt + row.toString() + '\n';
            }

            await rs.close();

            let fileName = '';

            const buf = Buffer.from(txt, 'latin1');

            if (!spmapper.jsonStoreProcedure[spName].fileName) {
                fileName = yyyymmdd() + '_' + spName;
            }

            res.setHeader('Content-Length', buf.length);
            res.setHeader('Content-Type', 'application/text');
            res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
            res.write(buf);
            res.end();

        } else {
            res.status(404).end();
        }

    } catch (err) {
        next(err);
    }
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
module.exports.getTXT = getTXT;

module.exports.getTXTipsst = getTXTipsst;

module.exports.getCursorFromSP = getCursorFromSP;