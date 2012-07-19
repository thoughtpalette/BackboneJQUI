app.components.slider = app.components.base.extend({

    initialize: function () {
        this.initalizeJquerySlider();
    },

    initalizeJquerySlider: function () {
        $(this.$el).slider();
    }

});