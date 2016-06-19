// Created by andrey on 19.06.16.

define([
    'marionette',
    'underscore',
    'text!tmpl/menuItemTemp.html',
    'models/page',
    'views/pageView'
    
], function (Marionette, _, MenuItemTemp, PageModel, PageView) {
    'use strict';
    
    return Marionette.ItemView.extend({
        template: _.template(MenuItemTemp),
        tagName : 'li',
        model   : PageModel,
        
        ui: {
            link: 'a'
        },
        
        events     : {
            'click a': 'activateMenu'
        },
        modelEvents: {
            "change:active": function () {
                this.render();
            }
        },
        
        activateMenu: function (event) {
            window.app.vent.trigger('menu:activate', this.model);
            window.app.main.show(new PageView({model: this.model}));
        },
        
        onRender: function () {
            if (this.model.get('active')) this.$el.addClass('active');
        }
        
    });
});
