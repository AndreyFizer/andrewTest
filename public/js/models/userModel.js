// Created by andrey on 23.06.16.

define([
    'jquery',
    'underscore',
    'backbone'

], function ($, _, Backbone) {
    "use strict";
    
    var Model = Backbone.Model.extend({
        idAttribute: '_id',
        
        defaults: {
            email    : "",
            firstName: "",
            lastName : "",
            role     : 1
        },
        
        urlRoot: function () {
            return '/users'
        }
    });
    
    return Model;
});