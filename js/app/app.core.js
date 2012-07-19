var app = {};
app.pageId = '';
app.domElements = {};
app.base = $("body").attr("data-base-path");

app.setDomElements = function () {
    app.domElements.body = $('body');
    app.domElements.container = $('#container');
};