app.views.home = app.views.base.extend({ 

	initialize: function () {
        app.views.base.prototype.initialize.call(this);
		this.intializeAccordion();
        this.initializeTabs();
	},

    intializeAccordion: function () {
        var _this = this;
        this.accordion = new app.components.accordion({
            el: $('.accordion'),
            active: true
        });
    },

    initializeTabs: function () {
        var _this = this;
        this.tabs = new app.components.tabs({
            el: $('#tabs')
        });
    }

});