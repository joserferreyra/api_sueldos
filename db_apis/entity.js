const baseQ = require('./baseQuery');

async function find(context, entity) {
    return baseQ.find(context, entity);
};

async function create(context, entity) {
    return baseQ.create(context, entity);
}

async function modify(context, entity) {
    return baseQ.modify(context, entity);
}

module.exports.find = find;
module.exports.create = create;
module.exports.modify = modify;