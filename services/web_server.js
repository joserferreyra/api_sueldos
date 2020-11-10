const http = require('http');
const express = require('express');
const webServerConfig = require('../config/web_server.js');
const router = require('./router.js');
//const database = require('./database.js');

let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);
        /*
                app.get('/', (req, res) => {
                    res.end('Api oracle!');
                });
        
        app.get('/', async (req, res) => {
            const result = await database.simpleExecute('select user, systimestamp from dual');
            const user = result.rows[0].USER;
            const date = result.rows[0].SYSTIMESTAMP;

            res.end(`DB user: ${user}\nDate: ${date}`);
        });
        */

        app.use('/api', router);

        httpServer.listen(webServerConfig.port, webServerConfig.host)
            .on('listening', () => {
                console.log(`Web server listening on localhost:${webServerConfig.port}`);

                resolve();
            })
            .on('error', err => {
                reject(err);
            });
    });
}

module.exports.initialize = initialize;

function close() {
    return new Promise((resolve, reject) => {
        httpServer.close((err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
}

module.exports.close = close;