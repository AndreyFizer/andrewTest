// Created by andrey on 19.06.16.

define([
    'marionette'
], function (Marionette) {
    'use strict';
    
    return Marionette.AppRouter.extend({
        appRoutes: {
            ''              : 'showPage',
            'page/:pageName': 'showPage',
            'hi'            : 'hello'
        }
    });
});