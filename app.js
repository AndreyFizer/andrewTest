'use strict';
/*global require, process, __dirname*/

var mongoose = require('mongoose');
var db;

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

require('./config/' + process.env.NODE_ENV);

mongoose.connect(process.env.DB_HOST, process.env.DB_NAME);
db = mongoose.connection;

db.on('error', function (err) {
    console.error('>>>>>    Connection Error: ', err);
});

db.once('open', function () {
    console.log('>>>>>    Successfully connection to ' + process.env.DB_HOST + '\\' + process.env.DB_NAME);
    
    require('./models/index');
    
    var sessionSchema = mongoose.Schema({
        _id    : String,
        session: String,
        expires: Date
    }, {
        collection: 'sessions'
    });
    
    var sessions = db.model('sessions', sessionSchema);
    var port = process.env.PORT || 3030;
    var http = require('http');
    var path = require('path');
    var express = require('express');
    var session = require('express-session');
    var logger = require('morgan');
    var bodyParser = require('body-parser');
    
    var app = express();
    
    var MemoryStore = require('connect-mongo')(session);
    var sessionConfig = {
        db               : db.name,
        host             : db.host,
        port             : db.port,
        saveUninitialized: false,
        resave           : false
    };
    
    app.use(logger('dev'));
    
    app.use(bodyParser.json({strict: false, inflate: false, limit: 1024 * 1024 * 5}));
    app.use(bodyParser.urlencoded({extended: false, limit: 1024 * 1024 * 5}));
    
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.use(session({
        name             : 'Andrey',
        secret           : 'opopaopaopaopaooopaoopa12345678901234567890',
        resave           : false,
        saveUninitialized: false,
        store            : new MemoryStore(sessionConfig)
    }));
    
    require('./routes/index')(app, db);
    
    app.listen(port, function () {
        console.log('>>>>>    Server start successfully on port [' + port + '] in ' + process.env.NODE_ENV + ' version');
    });
});

module.exports = {
    db: db
};