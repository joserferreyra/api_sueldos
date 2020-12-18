const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const fs = require("fs");
const path = require('path');

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

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
app.use(helmet());

/*
const whitelist = ['http://localhost:3000','http://sueldos.duckdns.org:8090'];
const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        if (whitelist.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORDS'))
        }        
    }
};
*/

//app.options('http://localhost:3000', cors())

app.options(cors());

app.route('/*')
    .get(control.get)
    .post(control.post)
    .put(control.put);

module.exports = app;