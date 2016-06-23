// Created by andrey on 19.06.16.

define([
    'app',
    'marionette'

], function (app, Marionette) {
    "use strict";
    
    return Marionette.Region.extend({
        
        onShow: function (view) {
            
            console.log('footerRegion');
        }
    });
    
});