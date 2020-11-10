const database = require('../services/database');
const baseQ = require('./baseQuery');

async function find(context){
    let query = `select idtipoliq, descripcion
                  from tipoliquidacion`;
    return baseQ.find(query,context)
};

async function count(context){
    let query = `select count(*) from tipoliquidacion`;
    return baseQ.count(query,context)
}

module.exports.find = find;