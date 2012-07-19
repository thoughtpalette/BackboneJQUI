app.components.tabs = app.components.base.extend({

    initialize: function (options) {
        this.options = $.extend(this.defaults, options);
        this.initalizeJqueryTabs();
    },

    initalizeJqueryTabs: function () {
        $(this.$el).tabs();
    }

});