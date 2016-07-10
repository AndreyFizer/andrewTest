define([
    'marionette'
], function (Marionette) {
    "use strict";
    
    var Router = Marionette.AppRouter.extend({
        routes: {
            "first"   : "firstRout",
            "*actions": "index"
        },
        index : function () {
        },
        
        firstRout: function () {
            
            require(['views/userView', 'collections/userCollection'], function (View, Coll) {
                var userCollection = new Coll();
                userCollection.fetch({
                    reset: true,
                    success: function (collection) {
                        var userView = new View({collection: collection});

                        window.APP.wrapper.show(userView);
                    }
                })
                
            })
        }
    });
    
    return Router;
});