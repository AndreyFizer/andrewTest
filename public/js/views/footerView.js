// Created by andrey on 19.06.16.

define([
    'marionette',
    'underscore',
    'text!tmpl/footerTemp.html'
    
], function (Marionette, _, FooterTemp) {
    'use strict';
    
    return Marionette.ItemView.extend({
        template: _.template(FooterTemp)
    });
});
 
