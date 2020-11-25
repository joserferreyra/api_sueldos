const baseQ = require('./baseQuery');

async function find(context, entityName, entity) {
    return baseQ.find(context, entity);
    //return baseQ.show(context, entityName, entity);
};

async function create(context, entity) {
    return baseQ.create(context, entity);
}

module.exports.find = find;
module.exports.create = create;