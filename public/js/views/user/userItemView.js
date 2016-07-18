// Created by andrey on 19.06.16.

define([
    'marionette',
    'underscore',
    'text!templates/user/userItemTemp.html',
    'models/userModel',
    'views/user/userEditView'

], function (Marionette, _, UserItemTemp, UserModel, EditView) {
    "use strict";
    
    return Marionette.ItemView.extend({
        template : _.template(UserItemTemp),
        tagName  : 'tr',
        className: 'usrRow',
        model    : UserModel,
        
        ui: {
            editSpan: '.letsEditUser'
        },
        
        events: {
            'click @ui.editSpan': 'letsEditCurrentUser'
        },
        
        letsEditCurrentUser: function () {
            var currentView = new EditView({
                model: this.model
            });
            
            window.APP.modalWrapper.show(currentView);
        },
        
        onRender: function () {
            console.dir(this.model.toJSON());
            // todo
            var a = 6;
            
            if (a === 6) {
                console.log('fff');
            }
        }
        
    });
});
