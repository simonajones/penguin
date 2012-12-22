/*
 * Configures Director to route hash locations to their corresponding view model functions.
 */
define(["model/app", "director"], function(app) {

	return Router({
		
		"/queues": app.queuesView.show,
		
		"/queue/new": app.queueCreate.show,
		
		"/queue/:id": app.queueView.show
		
	}).init("/queues");
	
});
