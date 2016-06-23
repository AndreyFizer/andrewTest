// Created by andrey on 19.06.16.

define([
    'backbone',
    'models/menuModel'
    
], function (Backbone, MenuModel) {
    'use strict';
    
    return Backbone.Collection.extend({
        model: MenuModel
    });
});