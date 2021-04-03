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

    const val = sp.out_param['varName'] ? ':' + sp.out_param['varName'] : null;
    const err = sp.out_param['varErrorName'] ? ':' + sp.out_param['varErrorName'] : null;
    const cur = sp.out_param['cursor'] ? ':' + sp.out_param['cursor'] : null;
    if (val) {
        sqlCab += ', ' + val;
    }
    if (err) {
        sqlCab += ', ' + err;
    }
    if (cur) {
        sqlCab += ', ' + cur;
    }
    sqlCab += '); END;';

    //console.log(sqlCab);

    return sqlCab;
}

async function execStoreProcedure(context, sp) {
    let query = getSQLcall(sp);

    const binds = context;

    //console.log(context)

    for (const key in context) {
        binds[key] = context[key];
    }

    if (sp.out_param['varName']) {
        binds[sp.out_param.varName] = { dir: oracledb.BIND_OUT };
        //, type: oracledb.NUMBER };
    }

    if (sp.out_param['varErrorName']) {
        binds[sp.out_param.varErrorName] = { dir: oracledb.BIND_OUT };
        //, type: oracledb.NUMBER };
    }

    //console.log(query);
    //console.log(binds);
    let idnum = 0;

    if (sp['log'].status == true ) {
        const seq = await database.simpleExecute(`SELECT logproc_seq.nextval FROM dual`);

        idnum = Number.parseInt(seq['rows'][0].NEXTVAL);

        const res = await database.simpleExecute(
            `INSERT INTO logproc(ID, INICIO, SP, FIN, QUERY, BINDS, OUTPUT, TIPO) 
                    VALUES (:vid, :vinicio, :vsp, null, :vquery, :vbinds, NULL, :tipo)`,
            {
                vid: idnum,
                vsp: sp.sp_name,
                vinicio: new Date(),
                vquery: query,
                vbinds: JSON.stringify(binds),
                tipo: sp.log['type']
            }
        );
    }

    //console.log(res);

    const start = new Date().now;

    let result = await database.simpleExecute(query, binds);

    if (sp['log'].status == true && idnum > 0 ) {
        const res2 = await database.simpleExecute(
            `UPDATE logproc set fin=:vfin where id = :vid`,
            {
                vfin: new Date(),
                vid: idnum
            }
        )
    }
    
    const millis = Date.now() - start;

    let json = { 'status': 200, 'params': binds, 'out': result.outBinds, 'elapsed': Math.floor(millis / 1000) };

    //console.log(json);
    //console.log(result);

    return json;

}

module.exports.execStoreProcedure = execStoreProcedure;