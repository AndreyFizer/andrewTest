// Created by andrey on 19.06.16.

define([
    'marionette',
    'underscore',
    'text!tmpl/pageTemp.html',
    'text!tmpl/homeTemp.html',
    'text!tmpl/aboutTemp.html',
    'text!tmpl/contactTemp.html'

], function (Marionette, _, PageTemp, HomeTemp, AboutTemp, ContactTemp) {
    'use strict';
    
    var pages = {
        home   : HomeTemp,
        about  : AboutTemp,
        contact: ContactTemp
    };
    
    return Marionette.ItemView.extend({
        template: _.template(PageTemp),
        
        ui: {
            header: 'h2'
        },
        
        events: {
            'click #notify' : 'notify',
            'click #modal'  : 'showSampleModal',
            'click #confirm': 'showSampleConfirm'
        },
        
        onBeforeRender: function () {
            this.model.set('content', _.result(pages, this.model.get('name')));
        },
        
        onRender: function () {
            this.ui.header.remove();
        },
        
        // Event handlers
        notify         : function (e) {
            app.commands.execute('app:notify', {
                type       : 'warning',
                title      : 'A Warning',
                description: 'Something important happened! Let the user know it.'
            });
        },
        showSampleModal: function (e) {
            app.commands.execute("app:dialog:simple", {
                title  : 'Dialog title!', // Optional
                message: 'The important message for user!'
            });
        },
        
        showSampleConfirm: function (e) {
            app.commands.execute("app:dialog:confirm", {
                icon      : 'info-sign',
                title     : 'Action confirmation!',
                message   : 'Are you sure to perform this serious action?',
                confirmNo : function () {
                    app.commands.execute('app:notify', {
                            type       : 'warning',
                            title      : 'You\'ve choosed No',
                            description: 'No problem. No action was taken.'
                        }
                    )
                },
                confirmYes: function () {
                    app.commands.execute('app:notify', {
                            type       : 'success',
                            title      : 'You\'ve choosed Yes',
                            description: 'You\'ve agreed! Thanks :)'
                        }
                    )
                }
            });
        }
        
    });
});
 
