const database = require('../services/database');
const oracledb = require('oracledb');
const { startup } = require('oracledb');

async function execStoreProcedure(context, sp) {
    let query = getSQLcall(sp);
    let binds = getSQLbinds(context, sp);
    
    //console.log(query);
    //console.log(binds);

    let result = {}
    let json = {}

    const status = sp['log'] ? sp.log['status'] : false;

    //console.log(status);

    const start = new Date().now;

    if (status) {

        let idnum = 0;

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

        result = await database.simpleExecute(query, binds);

        const res2 = await database.simpleExecute(
            `UPDATE logproc set fin=:vfin where id = :vid`,
            {
                vfin: new Date(),
                vid: idnum
            }
        )

    } else {

        result = await database.simpleExecute(query, binds);

    }

    const millis = Date.now() - start;

    json = { status: 200, params: binds, out: result.outBinds, elapsed: Math.floor(millis / 1000) };

    //console.log(json.out.cursor);
    //console.log(result);

    //console.log(res);

    return json;

}

module.exports.getSQLcall = getSQLcall;
module.exports.getSQLbinds = getSQLbinds;
module.exports.execStoreProcedure = execStoreProcedure;