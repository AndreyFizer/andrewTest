// Created by andrey on 19.06.16.

define([
    'jquery',
    'underscore',
    'marionette',
    'views/topBarItemView',
    'text!templates/topBarTemp.html'

], function ($, _, Marionette, TopBarItemView, TopBarTemp) {
    var View;
    View = Marionette.CompositeView.extend({
        childView : TopBarItemView,
        childViewContainer : 'ul',
        template: _.template(TopBarTemp)
    });
    
    return View;
    
});