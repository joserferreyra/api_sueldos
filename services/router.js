const express = require('express');
const bodyParser = require("body-parser");
const app = new express.Router();

const control = require('../controllers/control');
const { json } = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json(replacer));

app.route('/*')
    .get(control.get)
    .post(control.post)
    .put(control.put);

module.exports = app;