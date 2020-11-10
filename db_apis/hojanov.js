const database = require('../services/database');
const baseQ = require('./baseQuery');

async function find(context){
    let query = `select IDESTADOHOJA as EstadoHoja,IDGRUPOADI,IDHOJANOV as Id,PERIODO,
                    IDTIPOLIQ,IDTIPOHOJA ,IDTIPOCARGA as tipocarga,FECHAALTA as FechaGrabacion 
                from hoja_nov`;
    return baseQ.find(query,context)
};

async function count(context){
    let query = `select count(idhojanov) as cant from hoja_nov`;
    return baseQ.count(query,context)
}


module.exports.find = find;

module.exports.count = count;