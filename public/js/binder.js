/*
 * Binds the HTML Knockout bindings to the application view model.
 */
define(["knockout", "model/app"], function(ko, app) {
	
	ko.applyBindings(app);
	
});
