const tipoliq = require('../db_apis/tipoliq.js');

async function get(req, res, next) {
  try {
    let context = {};

    context = req.query;

    const rows = await tipoliq.find(context);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).end();
    }

  } catch (err) {
    next(err);
  }
}

module.exports.get = get;