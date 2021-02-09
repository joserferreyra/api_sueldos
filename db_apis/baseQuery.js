const { query } = require('express');
const { SHUTDOWN_MODE_IMMEDIATE } = require('oracledb');
const database = require('../services/database');

//private func

function getSQLcomplexSelect(entity, parentEntity) {
    let sqlCab = 'SELECT ';
    let first = true;
    for (const key in entity.fields) {
        if (first) {
            first = false;
        } else {
            sqlCab += ', ';
        }
        if (typeof entity.fields[key] != 'object') {
            sqlCab += entity.fields[key] + ' as ' + key;
        } else {
            sqlCab += '(' + getSQLcomplexSelect(entity.fields[key], entity) + ') as ' + key;
        }
    }
    sqlCab += '\nFROM ' + entity.table;

    if (parentEntity != undefined) {
        sqlCab += `\nwhere ` + entity.table + '.' + entity.foringKey + `= ` + parentEntity.table + '.' + entity.parentKey;
    }

    return sqlCab;
}

function getSQLselect(entity) {
    let sqlCab = 'SELECT ';
    let first = true;
    for (const key in entity.fields) {
        if (first) {
            first = false;
        } else {
            sqlCab += ', ';
        }
        sqlCab += entity.fields[key] + ' as ' + key;
    }
    sqlCab += '\nFROM ' + entity.table;

    return sqlCab;
}

function getSQLinsert(context, entity) {
    let sqlCab = 'INSERT INTO ' + entity.table;
    let strValues = '';
    let first = true;
    let hasSeq = false;

    for (const key in entity.fields) {
        if (typeof entity.fields[key] != 'object' && key in context) {
            // || (entity['sequence'] && key == entity['sequence'].field))) {
            if (first) {
                first = false;
                sqlCab += ' (';
                strValues = ' VALUES ('
            } else {
                sqlCab += ', ';
                strValues += ', ';
            }
            //if (typeof entity.fields[key] != 'object') {
            sqlCab += entity.fields[key];
            //}

            if (entity['key'].field == key) {
                if (entity['key'].seq) {
                    strValues += entity.key.seq;
                } else {
                    strValues += ':' + key;
                }
            } else {
                strValues += ':' + key;
            }
        }
    }

    strValues += ')';
    sqlCab += ') ' + strValues;

    return sqlCab;
}

function getSQLupdate(context, entity) {
    let sqlCab = 'UPDATE ' + entity.table;
    let first = true;

    //console.log(context);

    for (const key in entity.fields) {
        if ((typeof entity.fields[key] != 'object') && (key in context && (key != entity['key'].field))) {
            if (first) {
                first = false;
                sqlCab += ' SET ';
            } else {
                sqlCab += ', ';
            }
            if (typeof entity.fields[key] != 'object') {
                sqlCab += entity.fields[key] + '= :' + key;
            }
        }
    }

    sqlCab += ' WHERE ' + entity.fields[entity['key'].field] + '= :' + entity['key'].field;

    return sqlCab;
}

function getSQLdelete(context, entity) {
    let sqlCab = 'DELETE ' + entity.table;

    sqlCab += ' WHERE ' + entity.fields[entity['key'].field] + '= :' + entity['key'].field;

    return sqlCab;
}


// public func

async function modify(context, entity) {
    let query = getSQLupdate(context, entity);
    const binds = {};

    for (const key in context) {
        if (typeof entity.fields[key] != 'object') {
            binds[key] = context[key];
        }
    }

    console.log(query);
    console.log(binds);

    if (binds[entity["key"].field]) {
        let result = await database.simpleExecute(query, binds);
        let json = { 'result': result, 'status': 200, rows: [] };
        return json;
    } else {
        let json = { 'err': 'Key field is not defined', 'status': 400 };
        return json;
    }

}

async function remove(context, entity) {
    let query = getSQLdelete(context, entity);
    const binds = {};

    //console.log(query);
    //console.log(binds);

    if (entity["key"].del) {

        for (const key in context) {
            if (typeof entity.fields[key] != 'object') {
                binds[key] = context[key];
            }
        }

        if (binds[entity["key"].field]) {
            console.log(query);
            let result = await database.simpleExecute(query, binds);
            let json = { 'result': result, 'status': 200, rows: [] };
            return json;
        } else {
            let json = { 'err': 'Key field is not defined', 'status': 400 };
            return json;
        }
    } else {

        let json = { 'err': 'delete is not permited', 'status': 400 };
        return json;

    }

}

async function create(context, entity) {
    let query = getSQLinsert(context, entity);
    const binds = {};

    for (const key in context) {
        if (typeof entity.fields[key] != 'object') {
            if (key != entity['key'].field) {
                binds[key] = context[key];
            }
        }
    }

    //console.log(query);
    //console.log(binds);

    let result = await database.simpleExecute(query, binds);
    let json = { 'result': result, 'status': 200, rows: [] };
    return json;
    //return result;
}

function getWhere(context, entity) {
    const binds = {};
    let query = '';

    let firstWhere = true;

    for (const key in context) {
        if (key != 'limit' & key != 'offset' & key != 'sort' & key != 'search' & key != 'greatereq' & key != 'lesseq') {
            //binds[entity.fields[key]] = context[key];
            binds[key] = context[key];
            if (firstWhere) {
                query += `\nwhere ` + entity.fields[key] + `= :` + key; // entity.fields[key];
                firstWhere = false;
            } else {
                query += `\nand ` + entity.fields[key] + `= :` + key; // entity.fields[key];
            }
        } else {
            if (key != 'sort' & key != 'search' & key != 'greatereq' & key != 'lesseq') {
                binds[key] = context[key];
            }
        }
    }

    if (context.search !== undefined) {
        let [key, text] = context.search.split(':');

        if (firstWhere) {
            query += ` \nwhere lower(${entity.fields[key]}) like '%${text.toLowerCase()}%' `;
        } else {
            query += `\nand lower(${entity.fields[key]}) like '%${text.toLowerCase()}%' `;
        }
    }

    if (context.greatereq !== undefined) {
        let [key, value] = context.greatereq.split(':');

        if (firstWhere) {
            query += ` \nwhere ${entity.fields[key]} >= TO_DATE('${value}','dd/mm/yyyy') `;
        } else {
            query += `\nand ${entity.fields[key]} >= TO_DATE('${value}','dd/mm/yyyy') `;
        }
    }

    if (context.lesseq !== undefined) {
        let [key, value] = context.lesseq.split(':');

        if (firstWhere) {
            query += ` \nwhere ${entity.fields[key]} <= TO_DATE('${value}','dd/mm/yyyy') `;
        } else {
            query += `\nand ${entity.fields[key]} <= TO_DATE('${value}','dd/mm/yyyy') `;
        }
    }

    if (context.sort !== undefined) {
        let jsonSort = JSON.parse(context.sort)
        let orderStr = '';
        let first = true
        for (const key in jsonSort) {
            if (!first) {
                orderStr += ', ';
            } else {
                first = false;
            }
            orderStr += key + ' ' + jsonSort[key];
        }
        // Bloque en caso de un solo ordenamiento
        /*
        let [column, order] = context.sort.split(':');
        if (order === undefined) {
            order = 'asc';
        }
        if (order !== 'asc' && order !== 'desc') {
            throw new Error('Ordenamiento invalido');
        }        
        query += `\norder by ${column} ${order} `;
        */
        query += `\norder by ${orderStr}`;
    }

    return { 'where': query, 'binds': binds };

}

async function find(context, entity) {

    let query = getSQLcomplexSelect(entity);

    let queryWhere = getWhere(context, entity);

    let fullQuery = query + queryWhere.where;

    const result = await database.simpleExecute(fullQuery, queryWhere.binds);

    return result;
}

module.exports.find = find;
module.exports.create = create;
module.exports.modify = modify;
module.exports.remove = remove;
module.exports.getWhere = getWhere;