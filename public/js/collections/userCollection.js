// Created by andrey on 23.06.16.
 
define([
    'jquery',
    'underscore',
    'backbone',
    'models/userModel'
    
], function ($, _, Backbone, UserModel) {
    "use strict";
    
    var UserCollection = Backbone.Collection.extend({
        model: UserModel,

        url: "/users",
        
        initialize: function () {
            
        }
    });
    return UserCollection;
});
