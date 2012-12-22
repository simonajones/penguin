/*
 * Router.
 */
var router = Router({
	
	"/queues": page.queuesView.show,
	
	"/queue/new": page.queueCreate.show,
	
	"/queue/:id": page.queueView.show
	
}).init("/queues");
