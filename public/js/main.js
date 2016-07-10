// Created by andrey on 19.06.16.

var APP = APP || {};

require.config({
    paths  : {
        'jquery'             : './libs/jquery/dist/jquery',
        'backbone'           : './libs/backbone/backbone',
        'underscore'         : './libs/lodash/dist/lodash',
        'marionette'         : './libs/marionette/lib/core/backbone.marionette',
        'backbone.babysitter': './libs/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr'     : './libs/backbone.wreqr/lib/backbone.wreqr',
        'bootstrap'          : './libs/bootstrap/dist/js/bootstrap.min',
        'text'               : './libs/text/text',
        'templates'          : '../templates',
        'views'              : './views',
        'app'                : './app'
    },
    shim   : {
        jquery    : {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone  : {
            deps   : ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps   : ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        bootstrap : {
            deps: ['jquery']
        },
        app       : {
            deps: ['marionette']
        }
    }
});

require([
        "app",
        "bootstrap"
    ],
    function (app) {
        "use strict";
        
        app.addInitializer();
        
        app.start();
        
    });