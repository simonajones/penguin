// Queue View

// ------------------------------------------------------------------------
// Models
// ------------------------------------------------------------------------

var pageModel = ko.mapping.fromJS({
	section: "queuesView"
});

var queuesView = {
	
	queues: ko.mapping.fromJS([]),
	
	show: function() {
		$.getJSON("/api/queues", function(data) {
			ko.mapping.fromJS(data, {}, queuesView.queues);
			pageModel.section("queuesView");
		});
	}

};
pageModel.queuesView = queuesView;

var queueView = {
	
	queue: ko.mapping.fromJS({
		name: null
	}),
	
	show: function(id) {
		$.getJSON("/api/queue/" + id, function(data) {
			ko.mapping.fromJS(data, {}, queueView.queue);
			pageModel.section("queueView");
		});
	}
	
};
pageModel.queueView = queueView;

var queueCreate = {
	
	queue: ko.mapping.fromJS({
		name: null,
	}),
	
	show: function() {
		// TODO: reset model
		pageModel.section("queueCreate");
	},
	
	create: function() {
		$.postJSON("/api/queues", ko.toJSON(this.queue), function() {
			// TODO: show new queue
			window.location.hash = "/queues";
		});
	},
	
};
pageModel.queueCreate = queueCreate;

ko.applyBindings(pageModel);

// ------------------------------------------------------------------------
// Router
// ------------------------------------------------------------------------

Router({
	"/queues": pageModel.queuesView.show,
	"/queue/new": pageModel.queueCreate.show,
	"/queue/:id": pageModel.queueView.show
}).init("/queues");
