app.components.progressBar = app.components.base.extend({
	
    defaults: {
        value: 20
    },

    initialize: function (options) {
        this.options = $.extend(this.defaults, options);
        this.initalizeProgressBar();
    },

    initalizeProgressBar: function () {
        $(this.$el).progressbar({
            value: this.options.value  
        });
    }

});