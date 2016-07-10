define([
        'marionette',
        'backbone',
        'router',
        'views/footerView',
        'views/topBarView',
        'collections/menuCollection'
    ],
    function (Marionette, Backbone, Router, FooterView, TopBarView, MenuColl) {
        "use strict";
        
        var app;
        window.APP = app = new Marionette.Application();
    
        var menuCollection = new MenuColl([
            {menuName: 'first', menuUrl: '#first', menuActive: true},
            {menuName: 'second', menuUrl: '#second', menuActive: false},
            {menuName: 'third', menuUrl: '#third', menuActive: false}
        ]);
        var footerView = new FooterView();
        var topBarView = new TopBarView({collection: menuCollection});
        
        app.addRegions({
            topBar   : '#topBar',
            wrapper  : '#wrapper',
            footerBar: '#footerBar'
        });
        
        app.addInitializer(function () {
            app.topBar.show(topBarView);
            app.footerBar.show(footerView);

            new Router;
            Backbone.history.start();
            console.log('App inicialized successfully...');
        });
        
        // app.on("start", function (options) {
        //
        //     if (Backbone.history) {
        //         Backbone.history.start();
        //     }
        // });
        
        return app;
    });
