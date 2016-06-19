// Created by andrey on 19.06.16.

require.config({
    paths: {
        underscore           : './libs/underscore/underscore-min',
        backbone             : './libs/backbone/backbone-min',
        marionette           : './libs/backbone.marionette/lib/core/backbone.marionette.min',
        jquery               : './libs/jquery/dist/jquery.min',
        text                 : './libs/text/text',
        bootstrap            : './libs/bootstrap/dist/js/bootstrap.min',
        tmpl                 : '../templates',
        'backbone.babysitter': './libs/backbone.babysitter/lib/backbone.babysitter.min',
        'backbone.wreqr'     : './libs/backbone.wreqr/lib/backbone.wreqr.min'
    },

    shim       : {
        underscore: {
            exports: '_'
        },
        
        backbone: {
            exports: 'Backbone',
            deps   : ['bootstrap', 'underscore']
        },

        marionette: {
            exports: 'Backbone.Marionette',
            deps   : ['backbone', 'backbone.babysitter', 'backbone.wreqr']
        },

        bootstrap: {
            deps: ['jquery']
        }

    },
    waitSeconds: 60
});

require([
    'app',
    'modules/pages',
    'jquery',
    'bootstrap'

], function (app, PagesModule) {
    'use strict';

    app.addInitializer(function () {
        PagesModule.start();
    });

    app.start();
});