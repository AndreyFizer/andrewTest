// Created by andrey on 19.06.16.

define([
    'marionette',
    'underscore',
    'text!templates/topBarItemTemp.html',
    'models/menuModel'

], function (Marionette, _, MenuItemTemp, MenuModel) {
    "use strict";
    
    return Marionette.ItemView.extend({
        tagName  : 'li',
        className: 'col-md-4',
        
        template: _.template(MenuItemTemp),
        model   : MenuModel,
        
        ui: {
            link: 'a'
        },
        
        // events     : {
        //     'click a': 'activateMenu'
        // },
        // modelEvents: {
        //     "change:active": function () {
        //         this.render();
        //     }
        // },
        
        // activateMenu: function (ev) {
        //     window.app.vent.trigger('menu:activate', this.model);
        //     window.app.main.show(new PageView({model: this.model}));
        // },
        
        onRender: function () {
            console.dir(this.model.toJSON());
        }
        
    });
});
