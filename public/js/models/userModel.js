// Created by andrey on 23.06.16.

define([
    'jquery',
    'underscore',
    'backbone',
    'moment'

], function ($, _, Backbone, moment) {
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
        },
        
        parse: function (atts) {
            atts.updatedAt = atts.updatedAt ? moment(atts.updatedAt).format("MMM Do YY") : '';
            atts.createdAt = atts.createdAt ? moment(atts.createdAt).format("MMM Do YY") : '';

            return atts;
        }
    });
    
    return Model;
});