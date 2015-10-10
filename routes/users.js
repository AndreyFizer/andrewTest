'use strict';

var express = require('express');
var router = express.Router();
var UserHandler = require('../handlers/users');

module.exports = function (db) {
  var userHandler = new UserHandler(db);

  router.post('/', userHandler.createUser);
  router.get('/:id', userHandler.getUserById);
  router.get('/', userHandler.getUsers);

  return router;
};