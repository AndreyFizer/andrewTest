define([
        'marionette',
        'backbone',
        'views/footerView',
        'views/topBarView',
        'collections/menuCollection'
    ],
    function (Marionette, Backbone, FooterView, TopBarView, MenuColl) {
        "use strict";
        
        var app = new Marionette.Application();
        
        var menuCollection = new MenuColl([
            {menuName: 'menu1', menuUrl: '#first', menuActive: true},
            {menuName: 'menu2', menuUrl: '#second', menuActive: false},
            {menuName: 'menu3', menuUrl: '#third', menuActive: false}
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
            
            console.log('App inicialized successfully...');
        });
        
        app.on("initialize:after", function (options) {
            if (Backbone.history) {
                Backbone.history.start();
            }
        });
        
        return app;
    });
