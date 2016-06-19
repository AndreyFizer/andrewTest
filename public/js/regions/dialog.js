// Created by andrey on 19.06.16.

define([
    'app',
    'marionette'

], function (app, Marionette) {
    "use strict";

    return Marionette.Region.extend({
        onShow: function (view) {
            this.listenTo(view, "dialog:close", this.closeDialog);

            var self = this;
            this.$el.modal({
                backdrop: true,
                keyboard: true,
                show    : true
            });
        },

        closeDialog: function () {
            this.stopListening();
            this.close();
            this.$el.modal('hide');
        }
    });

});