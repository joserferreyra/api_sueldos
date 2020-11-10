const hojanov = require('../db_apis/hojanov.js');

async function get(req, res, next) {
    try {
        let context = {};

        context = req.query;

        const rows = await hojanov.find(context);

        if (rows.length>0){
            res.status(200).json(rows);
        }else{
            res.status(404).end();
        }
        
    } catch (err) {
        next(err);
    }
}

module.exports = {
    get: get
}