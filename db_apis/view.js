const database = require('../services/database');
const baseQuery = require('./baseQuery');

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
    entity.sql["fromClause"].forEach(line => {
        sqlCab += '\n' + line + ' '
    });

    return sqlCab;
}

async function getView(context, entity) {
    //const binds = {};

    let query = getSQLselect(entity);

    let firstWhere = true;

    let queryWhere = baseQuery.getWhere(context, entity);

    let sqlGroup = '';

    if (entity.sql["groupClause"]) {
        entity.sql["groupClause"].forEach(line => {
            sqlGroup += '\n' + line + ' '
        });
    }

    let fullQuery = query + queryWhere.where + sqlGroup;

    //Para debug    
    //console.log(fullQuery);
    //console.log(queryWhere.binds);

    const result = await database.simpleExecute(fullQuery, queryWhere.binds);

    return result;

}

module.exports.getView = getView;