/**
 * Created by Andrey on 03.10.2015.
 */

var App = {};

require.config({
    paths: {
        jQuery          : './libs/jquery/dist/jquery',
        Underscore      : './libs/underscore/underscore',
        Backbone        : './libs/backbone/backbone',
        less            : './libs/less/dist/less',
        views           : './views',
        models          : './models',
        collections     : './collections',
        text            : './libs/text/text',
        templates       : '../templates'
    },
    shim: {
        'Backbone'      : ['Underscore', 'jQuery'],
        'app'           : ['Backbone','less']
    }
});

require(['app'], function(app){

    Backbone.View.prototype.errorNotification = function (xhr) {
        if (xhr) {
            if (xhr.status === 401 || xhr.status === 403) {
                if (xhr.status === 401) {
                    Backbone.history.navigate("login", { trigger: true });
                } else {
                    alert("You do not have permission to perform this action");
                }
            } else {
                if (xhr.responseJSON) {
                    alert(xhr.responseJSON.error);
                } else {
                    Backbone.history.navigate("users", { trigger: true });
                }
            }
        }
    };

    app.initialize();
});