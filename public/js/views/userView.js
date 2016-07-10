define([
    'jquery',
    'underscore',
    'marionette',
    'views/userItemView',
    'text!templates/userTemp.html'

], function ($, _, Marionette, UserItemView, UserTemp) {
    "use strict";
    
    var View = Marionette.CollectionView.extend({
        childView         : UserItemView,
        childViewContainer: '#usrItemContainer',
        
        template: _.template(UserTemp)
    });
    
    return View;
    
});