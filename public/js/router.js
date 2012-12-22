/*
 * Router.
 */
define(["models/app", "director"], function(app) {

	return Router({
		
		"/queues": app.queuesView.show,
		
		"/queue/new": app.queueCreate.show,
		
		"/queue/:id": app.queueView.show
		
	}).init("/queues");
	
});
