// Created by andrey on 19.06.16.

define([
    'jquery',
    'underscore',
    'marionette',
    'text!templates/footerTemp.html'
    
], function ($, _, Marionette, FooterTmpl) {
    "use strict";
    
    var View;
    View = Marionette.ItemView.extend({
        
        template: _.template(FooterTmpl)
        
    });
    
    return View;
    
});