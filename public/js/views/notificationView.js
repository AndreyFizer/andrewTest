// Created by andrey on 19.06.16.

define([
    'marionette',
    'text!tmpl/notificationTemp.html'
    
], function (Marionette, notificationTpl) {
    'use strict';
    
    return Marionette.ItemView.extend({
        template: notificationTpl,
        events: {
            'click .dismiss': function(e) {
                e.preventDefault();
                this.trigger('notification:close');
            }
        }
    });
});