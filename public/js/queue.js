// Queue View

$(function() {
	
	// ------------------------------------------------------------------------
	// Models
	// ------------------------------------------------------------------------
	
	var pageModel = ko.mapping.fromJS({
		section: "queuesView"
	});
	
	pageModel.queuesView = ko.mapping.fromJS({
		queues: []
	});
	
	pageModel.queueView = ko.mapping.fromJS({
		queue: {
			name: null
		}
	});
	
	pageModel.queueCreate = ko.mapping.fromJS({
		queue: {
			name: null,
		},
		create: function() {
			postJSON("/api/queues", ko.toJSON(this.queue), function() {
				// TODO: show new queue
			});
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

	// ------------------------------------------------------------------------
	// Utilities
	// ------------------------------------------------------------------------
	
	// TODO: move elsewhere
	var postJSON = function(url, data, success) {
		return $.ajax({
			type: "POST",
			url: url,
			contentType: "application/json",
			data: data,
			success: success
		});
	};
	
});
