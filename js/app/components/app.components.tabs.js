app.components.tabs = app.components.base.extend({

    initialize: function () {
        this.initalizeJqueryTabs();
    },

    initalizeJqueryTabs: function () {
        $(this.$el).tabs();
    }

});