/*
 * Binds the HTML Knockout bindings to the page view model.
 */
define(["knockout", "model/page"], function(ko, model) {
	
	ko.applyBindings(model);
	
});
