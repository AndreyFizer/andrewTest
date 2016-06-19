// Created by andrey on 19.06.16.

define([
    'app',
    'marionette'
], function(app, Marionette){
    "use strict";
    
    window.notifyTimeout = null;
    
    return  Marionette.Region.extend({
        
        
        onShow: function(view){
            this.listenTo(view, "notification:close", this.closeNotification);
            this.$el.fadeIn('slow');
            
            window.notifyTimeout = setTimeout(this.closeNotification, 5000);
        },
        
        closeNotification: function(){
            $('#notification').fadeOut('slow');
            clearTimeout(window.notifyTimeout);
        }
    });
    
});
