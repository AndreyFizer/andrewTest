// Created by andrey on 10.07.16.

define([
    'jquery',
    'underscore',
    'marionette',
    'text!templates/user/userEditTemp.html',
    'models/userModel'

], function ($, _, Marionette, EditTemp, UsrModel) {
    "use strict";

    var EditView;
    EditView = Marionette.ItemView.extend({
        template: _.template(EditTemp),

        ui: {
            saveBtn : "#saveBtnModal",
            frstName: "#firstNameInpt",
            lastName: "#lastNameInpt",
            email   : "#emailInpt",
            role    : "#roleInpt"
        },
        
        initialize: function () {
            if (!this.model) {
                this.model = new UsrModel();
            }
        },
        
        events: {
            'click @ui.saveBtn': 'letsSaveUser'
        },

        letsSaveUser: function () {
            var saveData = {
                firstName: this.ui.frstName.val().trim(),
                lastName : this.ui.lastName.val().trim(),
                email    : this.ui.email.val().trim(),
                role     : this.ui.role.val().trim()
            };

            this.model.save(saveData, {
                success: function (resp) {
                    console.dir(resp);
                },
                error  : function (xhr, err) {
                    console.error(err);
                }
            });
        }
        
    });
    
    return EditView;
    
});