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

var appModel = $.extend({
	queuesView: queuesView,
	queueView: queueView,
	queueCreate: queueCreate
}, pageModel);

ko.applyBindings(appModel);

// ------------------------------------------------------------------------
// Router
// ------------------------------------------------------------------------

Router({
	"/queues": appModel.queuesView.show,
	"/queue/new": appModel.queueCreate.show,
	"/queue/:id": appModel.queueView.show
}).init("/queues");
