const database = require('../services/database');
const baseQuery = require('../db_apis/baseQuery');

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
    //const binds = {};

    let query = getSQLselect(entity);

    let firstWhere = true;

    let queryWhere = baseQuery.getWhere(context, entity);

    let fullQuery = query + queryWhere.where;

    //Para debug    
    //console.log(fullQuery);
    //console.log(queryWhere.binds);

    const result = await database.simpleExecute(fullQuery, queryWhere.binds);

    return result;

}

module.exports.getLiq = getLiq;