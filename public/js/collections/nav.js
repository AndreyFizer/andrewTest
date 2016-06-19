// Created by andrey on 19.06.16.

define([
    'backbone',
    'models/page'
], function (Backbone, PageModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: PageModel
    });
});
