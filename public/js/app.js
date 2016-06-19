// Created by andrey on 19.06.16.

define([
    'backbone',
    'marionette',
    'regions/notifications',
    'regions/dialog',
    'collections/nav',
    'views/menuView',
    'views/footerView'

], function (Backbone, Marionette, NotifyRegion, DialogRegion, NavColl, MenuView, FooterView) {
    'use strict';
    
    var app = new Marionette.Application();
    
    app.pages = new NavColl([
        {title: 'Home', name: 'home', active: true},
        {title: 'About', name: 'about'},
        {title: 'Contact', name: 'contact'}
    ]);
    var menu = new MenuView({collection: app.pages});
    
    app.addRegions({
        menu        : '#main-nav',
        main        : '#main',
        footer      : '#footer',
        notification: {
            selector  : "#notification",
            regionType: NotifyRegion
        },
        dialog      : {
            selector  : "#dialog",
            regionType: DialogRegion
        }
    });
    
    app.addInitializer(function () {
        app.menu.show(menu);
        app.footer.show(new FooterView());
    });
    
    app.on("initialize:after", function (options) {
        if (Backbone.history) {
            Backbone.history.start();
        }
    });
    
    app.vent.on('menu:activate', function (activePageModel) {
        menu.collection
            .findWhere({active: true})
            .set('active', false);
        activePageModel.set('active', true);
        menu.render();
    });

    app.commands.setHandler("app:notify", function (jsonData) {
        require(['views/notificationView'], function (NotifyView) {
            app.notification.show(new NotifyView({
                model: new Backbone.Model(jsonData)
            }));
        });
    });

    app.commands.setHandler("app:dialog:simple", function (data) {
        require(['views/dialogView', 'models/dialog', 'text!tmpl/simpleModal.html'],
            function (DialogView, DialogModel, ModalTpl) {
                
                app.dialog.show(new DialogView({
                    template: ModalTpl,
                    model   : new DialogModel(data)
                }));
            });
    });

    app.commands.setHandler("app:dialog:confirm", function (data) {
        require(['views/DialogView', 'models/Dialog', 'tpl!templates/confirmModal.html'],
            function (DialogView, DialogModel, ModalTpl) {
                
                app.dialog.show(new DialogView({
                    template: ModalTpl,
                    model   : new DialogModel(data),
                    events  : {
                        'click .dismiss'    : 'dismiss',
                        'click .confirm_yes': data.confirmYes,
                        'click .confirm_no' : data.confirmNo
                    }
                }));
            });
    });
    
    return window.app = app;
});
