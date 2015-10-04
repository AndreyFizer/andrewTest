'use strict';

var express = require('express');
var router = express.Router();
var UserHandler = require('../handlers/users');

module.exports = function (db) {
  var userHandler = new UserHandler(db);

  router.post('/', userHandler.createUser);

  return router;
};