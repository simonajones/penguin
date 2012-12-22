// Queue View

// ------------------------------------------------------------------------
// Models
// ------------------------------------------------------------------------

var page = {
	show: ko.observable()
};

var queuesView = {
	
	queues: ko.observableArray(),
	
	show: function() {
		$.getJSON("/api/queues", function(data) {
			ko.mapping.fromJS(data, {}, queuesView.queues);
			page.show(queuesView);
		});
	}

};

var queueView = {
	
	queue: ko.mapping.fromJS({
		name: null
	}),
	
	show: function(id) {
		$.getJSON("/api/queue/" + id, function(data) {
			ko.mapping.fromJS(data, {}, queueView.queue);
			page.show(queueView);
		});
	}
	
};

var queueCreate = {
	
	queue: ko.mapping.fromJS({
		name: null,
	}),
	
	show: function() {
		// TODO: reset model
		page.show(queueCreate);
	},
	
	create: function() {
		$.postJSON("/api/queues", ko.toJSON(this.queue), function() {
			// TODO: show new queue
			window.location.hash = "/queues";
		});
	},
	
};

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
