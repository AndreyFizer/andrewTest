// Created by andrey on 19.06.16.

define([
    'marionette',
    'underscore',
    'text!templates/userItemTemp.html',
    'models/userModel'

], function (Marionette, _, UserItemTemp, UserModel) {
    'use strict';
    
    return Marionette.ItemView.extend({
        template : _.template(UserItemTemp),
        tagName  : 'tr',
        className: 'usrRow',
        model    : UserModel,
        
        ui: {
            link: 'a'
        },
        
        onRender: function () {
            console.dir(this.model.toJSON());
        }
        
    });
});
