const express = require('express');
const router = new express.Router();
const tipoliq = require('../controllers/tipoliq');
const novhaberes = require('../controllers/novhaberes');
const hojanov = require('../controllers/hojanov');
 
router.route('/tipoliq').get(tipoliq.get);

router.route('/novhaberes').get(novhaberes.get);

router.route('/hojanov').get(hojanov.get);

//router.route('/hojanovcount').get(hojanov.get);

module.exports = router;