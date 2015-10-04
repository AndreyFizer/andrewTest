/**
 * Created by Andrey on 03.10.2015.
 */
"use strict";


var crypto = require("crypto");
var mongoose = require('mongoose');

var UserHandler = function (db) {
    var async = require('async');
    var userSchema = mongoose.Schemas['User'];

    function createUser(req, res, next) {

        var User =  db.get(req.session.lastDb, 'Invoice', InvoiceSchema);
        var body = req.body;

        var invoice = new User(body);

        if (req.session.uId) {
            invoice.createdBy.user = req.session.uId;
            invoice.editedBy.user = req.session.uId;
        }

        invoice.save(function (err, result) {
            if (err) {
                return next(err);
            }
            res.status(200).send({success: result});
        });
    }

};

module.exports = UserHandler;