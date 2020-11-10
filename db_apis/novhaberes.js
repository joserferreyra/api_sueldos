const database = require('../services/database');
const baseQ = require('./baseQuery');

async function find(context){
    let query = `select * from novhaberes`;
    return baseQ.find(query,context)
};

async function count(context){
    let query = `select count(*) from novhaberes`;
    return baseQ.count(query,context)
}

module.exports.find = find;