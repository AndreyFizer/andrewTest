// Created by andrey on 19.06.16.

define([
    'marionette',
    'views/menuItemView'

], function (Marionette, MenuItemView) {
    'use strict';
    
    return Marionette.CollectionView.extend({
        itemView : MenuItemView,
        tagName  : 'ul',
        className: 'nav nav-pills pull-right'
    });
    
});
 
