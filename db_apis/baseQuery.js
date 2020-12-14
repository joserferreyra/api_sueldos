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
    for (const key in entity.fields) {
        if (typeof entity.fields[key] != 'object' && (key in context || key == entity['sequence'].field)) {
            if (first) {
                first = false;
                sqlCab += ' (';
                strValues = ' VALUES ('
            } else {
                sqlCab += ', ';
                strValues += ', ';
            }
            if (typeof entity.fields[key] != 'object') {
                sqlCab += entity.fields[key];
            }

            if (entity['sequence']) {
                if (entity['sequence'].field == key) {
                    strValues += entity.sequence.seq;
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
        if ((typeof entity.fields[key] != 'object') && (key in context && key != entity['sequence'].field)) {
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
    sqlCab += ' WHERE ' + entity.fields[entity['sequence'].field] + '= :' + entity['sequence'].field;

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

    //console.log(query);
    //console.log(binds);

    let result = await database.simpleExecute(query, binds);
    return result;
}

async function create(context, entity) {
    let query = getSQLinsert(context, entity);
    const binds = {};

    for (const key in context) {
        if (typeof entity.fields[key] != 'object') {
            binds[key] = context[key];
        }
    }

    //console.log(query);

    let result = await database.simpleExecute(query, binds);
    return result;
}

async function find(context, entity) {
    const binds = {};

    let query = getSQLcomplexSelect(entity);

    let firstWhere = true;

    for (const key in context) {
        if (key != 'limit' & key != 'offset' & key != 'sort') {
            binds[entity.fields[key]] = context[key];
            if (firstWhere) {
                query += `\nwhere ` + entity.fields[key] + `= :` + entity.fields[key];
                firstWhere = false;
            } else {
                query += `\nand ` + entity.fields[key] + `= :` + entity.fields[key];
            }
        } else {
            if (key != 'sort') {
                binds[key] = context[key];
            }
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

    //Para debug
    console.log(query);

    const result = await database.simpleExecute(query, binds);

    return result.rows;

}

module.exports.find = find;
module.exports.create = create;
module.exports.modify = modify;