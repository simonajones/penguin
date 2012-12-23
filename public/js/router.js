/*
 * Configures Director to route hash locations to their corresponding view model functions.
 */
define(["model/page", "model/queueCreate", "model/queuesView", "model/queueView", "director"], function(page) {

	return Router({
		
		"/queues": function() {
			page.queuesView.load();
			page.show("queuesView");
		},
		
		"/queue/new": function() {
			page.queueCreate.reset();
			page.show("queueCreate");
		},
		
		"/queue/:id": function(id) {
			page.queueView.load(id);
			page.show("queueView");
		}
		
	}).init("/queues");
	
});
