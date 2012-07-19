$(document).ready(
	function () {
	    app.setDomElements();

	    var router = crossroads;
	    app.currentView = null;

	    router.addRoute(app.base, function () {
	        app.currentView = new app.views.home();
	        console.log("home view loaded");
	    });

		router.addRoute(app.base + "subpage/subpage.html", function () {
			app.currentView = new app.views.subpage();
			console.log("subpage view loaded");
		});

	    router.parse(window.location.pathname);

	    console.log(window.location.pathname);

	    if (app.currentView == null) {
	        app.currentView = new app.views.base();
	    }


	}
);


