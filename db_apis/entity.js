const baseQ = require('./baseQuery');

async function find(context, entity) {
    return baseQ.find(context, entity);
};

async function create(context, entity) {
    return baseQ.create(context, entity);
}

module.exports.find = find;
module.exports.create = create;