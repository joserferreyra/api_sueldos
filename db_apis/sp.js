const database = require('../services/database');

function getSQLcall(sp) {
    let sqlCab = 'CALL ' + sp.sp_name + '(';
    let first = true;
    for (const key in sp.in_param) {
        if (first) {
            first = false;
        } else {
            sqlCab += ', ';
        }
        sqlCab += ':'+key;
    }
    sqlCab += ')';
                
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
    return result;
}

module.exports.execStoreProcedure = execStoreProcedure;