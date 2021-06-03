const oracledb = require('oracledb');
const dbConfig = require('../config/database');

async function initialize() {
    const pool = await oracledb.createPool(dbConfig.dbPool);
    console.log('Conexión a BD establecida.');
}

module.exports.initialize = initialize;

async function close() {
    await oracledb.getPool().close();
    console.log('Desconexión a BD.');
}

module.exports.close = close;

function getQueryLimits(query) {
    return `SELECT * FROM (SELECT A.*, ROWNUM AS MY_RNUM FROM ( ${query} ) A
             WHERE ROWNUM <= :limit + :offset) WHERE MY_RNUM > :offset`;
}

function simpleExecute(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
        let conn;
        let query;
        opts.outFormat = oracledb.OBJECT;
        opts.autoCommit = true;
        try {
            conn = await oracledb.getConnection();
            if (binds.limit !== undefined) {
                if (binds.offset == undefined) {
                    binds.offset = 0;
                }
                query = getQueryLimits(statement);
            } else {
                query = statement;
            }
            //console.log("Inicio de la ejecución");            
            const result = await conn.execute(query, binds, opts);
            //console.log("Fin de la ejecución");
            resolve(result);
        } catch (err) {
            reject(err);
        } finally {
            if (conn) {
                try {
                    await conn.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    })
}

module.exports.simpleExecute = simpleExecute;


function simpleExecuteNoLimit(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
        let conn;
        let query;
        opts.outFormat = oracledb.OBJECT;
        opts.autoCommit = true;
        try {
            conn = await oracledb.getConnection();
            //console.log(statement);
            //console.log(binds);
            const result = await conn.execute(statement, binds, opts);
            resolve(result);
        } catch (err) {
            reject(err);
        } finally {
            if (conn) {
                try {
                    await conn.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    })
}

module.exports.exec = simpleExecuteNoLimit;

async function getConnection() {
    return await oracledb.getConnection();
}

module.exports.getConnection = getConnection;