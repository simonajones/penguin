/*
 * Configures the router for queues.
 */
define(["router", "model/page", "model/queueCreate", "model/queuesView", "model/queueView"], function(router, page) {

	router.on("/queues", function() {
		page.queuesView.load();
		page.show("queuesView");
	});
	
	router.on("/queue/new", function() {
		page.queueCreate.reset();
		page.show("queueCreate");
	});
	
	router.on("/queue/:id", function(id) {
		page.queueView.load(id);
		page.show("queueView");
	});
	
});
