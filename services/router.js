const express = require('express');
const bodyParser = require("body-parser");
const app = new express.Router();

const control = require('../controllers/control');
const { json } = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


const options = {
    reviver: (key, value) => {
        //console.log('reviver');
        let dateTimeRegExp = /^\d{4}-\d{2}-\d{2}/;
        // T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
        if (typeof value === 'string' && dateTimeRegExp.test(value)) {
            console.log('dateeee')
            return new Date(value);
        } else {
            return value;
        }
    }
};


app.use(bodyParser.json(options));

app.route('/*')
    .get(control.get)
    .post(control.post)
    .put(control.put);

module.exports = app;