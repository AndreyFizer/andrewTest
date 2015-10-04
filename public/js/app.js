/**
 * Created by Andrey on 03.10.2015.
 */

define([
    'router'
], function (Router) {

    var initialize = function () {
        var appRouter;
        var url;

        //App.sessionData = new Backbone.Model({
        //    authorized  : false,
        //    user        : null,
        //    role        : null
        //});

        appRouter = new Router();
        App.router = appRouter;

        Backbone.history.start({silent: true});

        url =  Backbone.history.fragment || Backbone.history.getFragment();

        if (url === "") {
            url = 'users';
        }

        if (Backbone.history.fragment) {
            Backbone.history.fragment = '';
        }


        Backbone.history.navigate(url, {trigger: true});

    };
    return {
        initialize: initialize
    }
});