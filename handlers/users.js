//Created by Andrey on 03.10.2015.

var crypto = require("crypto");
var mongoose = require('mongoose');

var UserHandler = function (db) {
    "use strict";
    
    var async = require('async');
    var userSchema = mongoose.Schemas['User'];
    var UserModel = db.model('User', userSchema);
    var ObjectId = mongoose.Schema.Types.ObjectId;

    function createUser(req, res, next) {

        var body = req.body;

        var userModel = new UserModel(body);

        userModel.save(function (err, user) {
            if (err) {
                return next(err);
            }
            res.status(200).send(user);
        });
    }

    function getUsers(req, res, next) {

        UserModel.find()
            .exec(function (err, users) {
                if (err) {
                    return next(err);
                }
                res.status(200).send(users);
            });
    }

    function getUserById(req, res, next){
        var userId = req.params.id;

        UserModel.find({'_id' : userId})
            .exec(function (err, user) {
                if (err) {
                    return next(err);
                }
                res.status(200).send(user);
            });
    }

    this.createUser = createUser;
    this.getUserById = getUserById;
    this.getUsers = getUsers;

};

module.exports = UserHandler;