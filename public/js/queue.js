// Queue View

$(function() {
	
	// ------------------------------------------------------------------------
	// Models
	// ------------------------------------------------------------------------
	
	var pageModel = ko.mapping.fromJS({
		section: "queuesView",
		queuesView: {
			queues: []
		},
		queueView: {
			queue: {
				name: null
			}
		},
		queueCreate: {
			queue: {
				name: null,
			},
			create: function() {
				// TODO: POST /api/queues
				console.log(this.queue.name());
			}
		}
	});
	
	ko.applyBindings(pageModel);
	
	// ------------------------------------------------------------------------
	// Router
	// ------------------------------------------------------------------------
	
	Router({
		
		"/queues": function() {
			$.getJSON("/api/queues", function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queuesView.queues);
				pageModel.section("queuesView");
			});
		},
		
		"/queue/new": function() {
			pageModel.section("queueCreate");
		},
		
		"/queue/:id": function(id) {
			$.getJSON("/api/queue/" + id, function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queueView.queue);
				pageModel.section("queueView");
			});
		}
		
	}).init("/queues");
	
});
