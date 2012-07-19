app.components.accordion = app.components.base.extend({
	
    defaults: {
        autoHeight: false,
        active: false,
        header: 'h3'
    },

    initialize: function (options) {
        this.options = $.extend(this.defaults, options);
        this.initalizeAccordionAutoHeight();
    },

    initalizeAccordionAutoHeight: function () {
        $(this.$el).accordion({
            autoHeight: this.options.autoHeight,
            active: this.options.active,
            header: this.options.header     
        });
    }

});