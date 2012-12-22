/*
 * Router.
 */
define(["models/page", "models/queueCreate", "models/queuesView", "models/queueView", "director"], function(page) {

	return Router({
		
		"/queues": page.queuesView.show,
		
		"/queue/new": page.queueCreate.show,
		
		"/queue/:id": page.queueView.show
		
	}).init("/queues");
	
});
