/*
 * Configures Director to route hash locations to their corresponding view model functions.
 */
define(["model/app", "director"], function(app) {

	return Router({
		
		"/queues": function() {
			app.queuesView.load();
			app.show("queuesView");
		},
		
		"/queue/new": function() {
			app.queueCreate.reset();
			app.show("queueCreate");
		},
		
		"/queue/:id": function(id) {
			app.queueView.load(id);
			app.show("queueView");
		}
		
	}).init("/queues");
	
});
