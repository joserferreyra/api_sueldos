const database = require('../services/database');
const oracledb = require('oracledb');

function getSQLcall(sp) {
    let sqlCab = 'BEGIN ' + sp.sp_name + '(';
    let first = true;
    for (const key in sp.in_param) {
        if (first) {
            first = false;
        } else {
            sqlCab += ', ';
        }
        sqlCab += ':'+key;
    }
    
    sqlCab += ');';
    sqlCab += ' END;';
                
    return sqlCab;
}

async function execStoreProcedure(context, sp) {
    let query = getSQLcall(sp);

    const binds = {};

    for (const key in context) {
        binds[key] = context[key];
    }
    
    console.log(query);
    console.log(binds);
    
    let result = await database.simpleExecute(query, binds);
    
    //let json = { 'result': result, 'status': 200, rows: [] };
    //return json;
    
    console.log(result);

    return result;
}

module.exports.execStoreProcedure = execStoreProcedure;