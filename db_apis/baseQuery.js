const database = require('../services/database');

//private func

function getSQLselect(entity) {
    let sqlCab = 'SELECT ';
    let first = true;
    for (const key in entity.fields) {
        if (first) {
            first = false;
        }
        else {
            sqlCab += ', ';
        }
        sqlCab += entity.fields[key] + ' as ' + key;
    }
    sqlCab += '\nFROM ' + entity.table;

    return sqlCab;
}

function getSQLinsert(entity) {
    let sqlCab = 'INSERT INTO ' + entity.table;
    let strValues = '';
    let first = true;
    for (const key in entity.fields) {
        if (first) {
            first = false;
            sqlCab += ' (';
            strValues = ' VALUES ('
        } else {
            sqlCab += ', ';
            strValues += ', ';
        }
        sqlCab += entity.fields[key];

        if (entity['sequence']) {
            if (entity['sequence'].field == key){
                strValues += entity.sequence.seq;    
            }else{
                strValues += ':' + key;
            }
        }else{
            strValues += ':' + key;
        }
    }

    strValues += ')';
    sqlCab += ') ' + strValues;

    return sqlCab;
}

// public func

async function create(context, entity) {
    let query = getSQLinsert(entity);
    const binds = {};

    for (const key in context) {
        binds[key] = context[key];
    }
    let result = await database.simpleExecute(query, binds);
    return result;

}

async function find(context, entity) {
    const binds = {};
    let query = getSQLselect(entity);

    let firstWhere = true;

    for (const key in context) {
        if (key != 'limit' & key != 'offset') {
            binds[entity.fields[key]] = context[key];
            if (firstWhere) {
                query += `\nwhere ` + entity.fields[key] + `= :` + entity.fields[key];
                firstWhere = false;
            } else {
                query += `\nand ` + entity.fields[key] + `= :` + entity.fields[key];
            }
        } else {
            binds[key] = context[key];
        }
    }

    const result = await database.simpleExecute(query, binds);
    return result.rows;

}

module.exports.find = find;
module.exports.create = create;