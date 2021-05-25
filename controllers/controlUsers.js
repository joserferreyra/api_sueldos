var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/database')

const { simpleExecute, getConnection } = require('../services/database');

function post(req, res, next) {
    var user = {
        userName: req.body.usr,
        email: req.body.email
    };

    var unhashedPassword = req.body.pws;

    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(unhashedPassword, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.hashedPassword = hash;
            insertUser(user, function (err, user) {
                var payload;

                if (err) {
                    return next(err);
                }

                payload = {
                    sub: user.Usr,
                    role: user.RolID
                };

                res.status(200).json({
                    user: user,
                    token: jwt.sign(payload, config.jwtSecretKey, { expiresInMinutes: 60 })
                });
                
            });
        });
    });
}

module.exports.post = post;

async function insertUser(user) {

    //connection = await database.simpleExecute .getConnection(dbConfig);

    const res = await simpleExecute (
        `insert into US_SUELDO.USUARIOS( ID,USR,PWS,MAIL,CREADO,ACTIVO,IDROL)
                values(1,:usr, :pwd, :email, :creacion, 1, :idrol)`,
        {
            usr: user.userName,
            email: user.email.toLowerCase(),
            pwd: user.hashedPassword,
            creacion: new Date(),
            idrol: 1
        }
    );
}