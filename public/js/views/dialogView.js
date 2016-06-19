// Created by andrey on 19.06.16.

define([
    'marionette'
], function (Marionette) {
    'use strict';
    
    return Marionette.ItemView.extend({
        events: {
            'click .dismiss': 'dismiss'
        },
        
        dismiss: function(ev) {
            ev.preventDefault();
            
            this.trigger('dialog:close');
        }
    });
});
 
