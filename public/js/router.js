define([
    'marionette'
], function (Marionette) {
    "use strict";
    
    var Router = Marionette.AppRouter.extend({
        routes: {
            "users"   : "usersRout",
            "*actions": "index"
        },
        
        index: function () {
        },
        
        usersRout: function () {
            
            require(['views/user/userView', 'collections/userCollection'], function (View, Coll) {
                var userCollection = new Coll();
                userCollection.fetch({
                    reset  : true,
                    success: function (collection) {
                        var userView = new View({collection: collection});
                        
                        window.APP.wrapper.show(userView);
                    }
                });
                
            });
        }
    });
    
    return Router;
});