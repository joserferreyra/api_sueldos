const database = require('../services/database');
const baseQ = require('./baseQuery');
const mapper = require('../config/mapper');

async function find(context){
    let query = baseQ.getSelect(mapper.jsonEntityMap,'hoja_nov');
    return baseQ.find(query,context)
};

async function count(context){
    let query = `select count(idhojanov) as cant from hoja_nov`;
    return baseQ.count(query,context)
}


module.exports.find = find;

module.exports.count = count;