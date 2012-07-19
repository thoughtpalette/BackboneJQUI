app.views.home = app.views.base.extend({ 

	initialize: function () {
        app.views.base.prototype.initialize.call(this);
		this.intializeAccordion();
	},

    intializeAccordion: function () {
        var _this = this;
        this.accordion = new app.components.accordion({
            el: $('.accordion'),
            active: true
        });
    }	

});