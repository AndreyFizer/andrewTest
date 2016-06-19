// Created by andrey on 19.06.16.

require.config({
    paths: {
        underscore  : './libs/underscore/underscore-min',
        backbone    : './libs/backbone/backbone-min',
        marionette  : './libs/backbone.marionette/lib/backbone.marionette.min',
        jquery      : './libs/jquery/dist/jquery.min',
        bootstrap   : './libs/bootstrap/dist/js/bootstrap.min',
        tmpl        : '../templates'
    },

    shim       : {
        underscore: {
            exports: '_'
        },
        
        backbone: {
            exports: 'Backbone',
            deps   : ['jquery', 'underscore']
        },

        marionette: {
            exports: 'Backbone.Marionette',
            deps   : ['backbone']
        },

        bootstrap: {
            deps: ['jquery']
        }

    },
    waitSeconds: 60
});

require([
    'app',
    'modules/Pages',
    'jquery',
    'bootstrap'
], function (app, PagesModule) {
    'use strict';

    app.addInitializer(function () {
        PagesModule.start();
    });

    app.start();
});