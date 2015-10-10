/**
 * Created by Andrey on 03.10.2015.
 */

/**
 * Created by andrey on 16.07.15.
 */

define([
    'views/menu/topMenuView',
    'views/menu/leftMenuView'
], function (TopMenu, LeftMenu) {

    var appRouter;
    appRouter = Backbone.Router.extend({

        wrapperView : null,
        topBarView  : null,
        leftBarView  : null,

        routes: {
            "users"                       :  "users",
            "*any"                        :  "any"
        },

        initialize: function () {
            this.topBarView = new TopMenu();
            this.leftBarView = new LeftMenu();
        },

        loadWrapperView: function (argName, argParams, argRedirect) {
            var self = this;
            var name = argName;
            var nameView = name+'View';
            var params =  argParams;
            var redirect = argRedirect;

            if (redirect === REDIRECT.whenNOTAuthorized) {
                if (!App.sessionData.get('authorized')){
                    return Backbone.history.navigate("login", {trigger: true});
                }
            }

            if (redirect === REDIRECT.whenAuthorized) {
                if (App.sessionData.get('authorized')){
                    return Backbone.history.navigate("users", {trigger: true});
                }
            }

            require(['views/'+name+'/'+nameView], function (View) {
                self[nameView] = new View(params);

                if (self.wrapperView) {
                    self.wrapperView.undelegateEvents();
                }

                self.wrapperView = self[nameView];

                if (self.wrapperView.afterRender) {
                    self.wrapperView.afterRender();
                }
            });
        },

        users : function () {
            var self = this;
            require([
                'views/users/usersView'], function(UserView){

                var userView = new UserView();

                if (self.wrapperView) {
                    self.wrapperView.undelegateEvents();
                }

                self.wrapperView = userView;
            });
        },

        any: function () {
            Backbone.history.navigate("users", {trigger: true});
        }

    });

    return appRouter;
});