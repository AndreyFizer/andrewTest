define([
    'jquery',
    'underscore',
    'marionette',
    'views/user/userItemView',
    'views/user/userEditView',
    'text!templates/user/userTemp.html'

], function ($, _, Marionette, UserItemView, UserEditView, UserTemp) {
    "use strict";
    
    var ItemView = Marionette.CompositeView.extend({
        childView         : UserItemView,
        childViewContainer: '#usrItemContainer',
        
        template: _.template(UserTemp),
        
        ui: {
            addBtn: "#letsAddUser"
        },
        
        events: {
            'click @ui.addBtn': 'letsAddCurrentUser'
        },

        letsAddCurrentUser: function () {
            var currentView = new UserEditView();

            window.APP.modalWrapper.show(currentView);
        }
    });
    
    return ItemView;
});