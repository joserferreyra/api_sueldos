const database = require('../services/database');

async function find(query, context) {
    const binds = {};

    let firstWhere = true;

    for (const key in context) {
        if (key != 'limit' & key != 'offset') {
            binds[key] = context[key];
            if (firstWhere) {
                query += `\nwhere ` + key + `= :` + key;
                firstWhere = false;
            } else {
                query += `\nand ` + key + `= :` + key;
            }
        } else {
            binds[key] = context[key];
        }
    }

    const result = await database.simpleExecute(query, binds);

    return result.rows;
}

async function count(query){
    const binds = {};

    let firstWhere = true;

    for (const key in context) {
        if (key != 'limit' & key != 'offset') {
            binds[key] = context[key];
            if (firstWhere) {
                query += `\nwhere ` + key + `= :` + key;
                firstWhere = false;
            } else {
                query += `\nand ` + key + `= :` + key;
            }
        }
    }

    const result = await database.simpleExecute(query, binds);

    return result.rows;
}

module.exports.find = find;

module.exports.count = count;