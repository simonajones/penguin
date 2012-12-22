// Queue View

// ------------------------------------------------------------------------
// Models
// ------------------------------------------------------------------------

var appModel = $.extend({
	queuesView: queuesView,
	queueView: queueView,
	queueCreate: queueCreate
}, page);

ko.applyBindings(appModel);

// ------------------------------------------------------------------------
// Router
// ------------------------------------------------------------------------

Router({
	"/queues": appModel.queuesView.show,
	"/queue/new": appModel.queueCreate.show,
	"/queue/:id": appModel.queueView.show
}).init("/queues");
