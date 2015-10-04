'use strict';

var express = require('express');
var router = express.Router();

module.exports = function (app, db) {
    var usersRouter;

 /* app.use(function (req, res, next) {
    if (process.env.NODE_ENV === 'development') {
      console.log('user-agent:', req.headers['user-agent']);
    }
    next();
  });*/

    app.get('/', function (req, res, next) {
        res.sendfile('index.html');
    });

    usersRouter = require('./users')(db);
    app.use('/users', usersRouter);

  /*app.get('/isAuth', session.isAuthenticatedUser);
  app.post('/signUp', userHandler.signUp);
  app.post('/signIn', userHandler.signIn);
  app.post('/signOut', session.kill);*/

};