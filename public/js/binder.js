/*
 * Binds the HTML Knockout bindings to the application view model.
 */
define(["knockout", "models/app"], function(ko, app) {
	
	ko.applyBindings(app);
	
});
