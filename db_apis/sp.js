const database = require('../services/database');
const oracledb = require('oracledb');
const { startup } = require('oracledb');

function getSQLcall(sp) {
    let sqlCab = 'BEGIN ' + sp.sp_name + '(';
    let first = true;
    for (const key in sp.in_param) {
        if (first) {
            first = false;
        } else {
            sqlCab += ', ';
        }
        sqlCab += ':' + key;
    }

    sqlCab += ');';
    sqlCab += ' END;';

    return sqlCab;
}

async function execStoreProcedure(context, sp) {
    let query = getSQLcall(sp);

    const binds = {};

    //console.log(context)

    for (const key in context) {
        binds[key] = context[key];
    }

    //console.log(query);
    //console.log(binds);

    const start = Date.now();

    let result = await database.simpleExecute(query, binds);

    const millis = Date.now() - start;

    let json = { 'status': 200, 'params': binds, 'elapsed': Math.floor(millis / 1000) };

    //console(json);

    return json;

}

module.exports.execStoreProcedure = execStoreProcedure;