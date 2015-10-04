/**
 * Created by Andrey on 03.10.2015.
 */


define([
    'views\\users\\userItemView',
    'text!templates\\users\\usersTemplate.html'

], function (UserView, UsersTemplate) {

    var View;
    View = Backbone.View.extend({

        el : '#wrapper',

        usersTemplate  : _.template(UsersTemplate),
        usersContainer : $('#usersContainer'),

        initialize: function () {
            this.render();
        },

        events : {
            "click #btn_save" : "letsSaveOurUser"
        },

        letsSaveOurUser: function() {
            var self = this;
            var thisEl = self.$el;
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
                success : function (response) {
                    self.clearFormData();
                    self.renderUserItem();
                    alert('User saved successfully!')
                },
                alert : function() {
                    alert('Error')
                }
            });
        },

        clearFormData: function(){
            var thisEl = this.$el;

            thisEl.find('#firstName').val('');
            thisEl.find('#lastName').val('');
            thisEl.find('#email').val('');
            thisEl.find('#password').val('');
            thisEl.find('#role').val('');
        },

        renderUserItem: function(item){
            var userView = new UserView({
                model : item
            });

            this.usersContainer.append(userView.render().el);
        },

        render: function () {

            this.$el.html(this.usersTemplate());
            return this;
        }

    });

    return View;

});