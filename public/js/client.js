/*
 * Penguin Client.
 */
require.config({
	
	paths: {
		jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
		knockout: "http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.0",
		knockoutmapping: "lib/knockout.mapping-latest",
		director: "lib/director.min",
		bootstrap: "http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min"
	},
	
	shim: {
		bootstrap: ["jquery"]
	}

});

require(["binder", "router", "bootstrap"]);
