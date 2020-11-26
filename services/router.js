const express = require('express');
const bodyParser = require("body-parser");
const app = new express.Router();

const control = require('../controllers/control');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/*')
    .get(control.get)
    .post(control.post);

module.exports = app;