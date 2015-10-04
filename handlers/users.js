/**
 * Created by Andrey on 03.10.2015.
 */
"use strict";


var crypto = require("crypto");
var mongoose = require('mongoose');

var UserHandler = function (db) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    var async = require('async');
    var userSchema = mongoose.Schemas['User'];
    var UserModel = db.model('User', userSchema);

    function createUser(req, res, next) {

        var body = req.body;

        var userModel = new UserModel(body);

        //if (req.session.uId) {
        //    invoice.createdBy.user = req.session.uId;
        //    invoice.editedBy.user = req.session.uId;
        //}

        userModel.save(function (err, result) {
            if (err) {
                return next(err);
            }
            res.status(200).send({success: result});
        });
    }

    this.createUser = createUser;

};

module.exports = UserHandler;