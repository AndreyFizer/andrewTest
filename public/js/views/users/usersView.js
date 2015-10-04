/**
 * Created by Andrey on 03.10.2015.
 */


define([
    'text!templates\\users\\usersTemplate.html'

], function (UsersTemplate) {

    var View;
    View = Backbone.View.extend({

        el : '#wrapper',

        usersTemplate : _.template(UsersTemplate),

        initialize: function () {
            this.render();
        },

        events : {
            "click #btn_save" : "letsSaveOurUser"
        },

        letsSaveOurUser: function() {
            var thisEl = this.$el;
            var first_name = thisEl.find('#firstName').val().trim();
            var last_name = thisEl.find('#lastName').val().trim();
            var email = thisEl.find('#email').val().trim();
            var password = thisEl.find('#password').val().trim();
            var role = +thisEl.find('#role').val().trim();

            var saveData = {
                firstName  : first_name,
                lastName   : last_name,
                email      : email,
                pass       : password,
                role       : role
            };

            $.ajax({
                url   : 'users',
                type  : 'POST',
                data  : saveData,
                success : function () {
                    alert('User saved successfully!')
                },
                alert : function() {
                    alert('Error')
                }
            });
        },

        render: function () {

            this.$el.html(this.usersTemplate());
            return this;
        }

    });

    return View;

});