// Created by andrey on 19.06.16.

define([
    'marionette',
    'underscore',
    'text!tmpl/pageTemp.html'
    
], function (Marionette, _, PageTemp) {
    'use strict';
    
    return Marionette.ItemView.extend({
        template: _.template(PageTemp),
        
        ui: {
            header: 'h2'
        },
        
        onBeforeRender: function(){
            this.model.set('content', _.result(templates.pages, this.model.get('name')))
        }
        
    });
});
 
