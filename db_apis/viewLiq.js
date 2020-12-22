const database = require('../services/database');

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
    sqlCab += `\nFROM LIQITEM  
                INNER JOIN LIQ ON LIQ.IDLIQ = LIQITEM.IDLIQ
                INNER JOIN CARGOS ON CARGOS.IDCARGO = LIQ.IDCARGO
                inner join concepto on concepto.idconcepto = liqitem.idconcepto
                inner join tipoliquidacion on tipoliquidacion.idtipoliq = liq.idtipoliq
                inner join personas on personas.idpers = cargos.idpers `;
                
    return sqlCab;
}

async function getLiq(context, entity) {
    const binds = {};

    let query = getSQLselect(entity);

    let firstWhere = true;

    for (const key in context) {
        if (key != 'limit' & key != 'offset' & key != 'sort' & key != 'search') {
            binds[key] = context[key];
            if (firstWhere) {
                query += `\nwhere ` + entity.fields[key] + `= :` + key;
                firstWhere = false;
            } else {
                query += `\nand ` + entity.fields[key] + `= :` + key;
            }
        } else {
            if (key != 'sort' & key != 'search') {
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
            orderStr += entity.fields[key] + ' ' + jsonSort[key];
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
    //console.log(query);
    //console.log(binds);

    const result = await database.simpleExecute(query, binds);
    return result;
}

module.exports.getLiq = getLiq;