// Queue View

$(function() {
	
	// ------------------------------------------------------------------------
	// Models
	// ------------------------------------------------------------------------
	
	var pageModel = ko.mapping.fromJS({
		section: "queuesView"
	});
	
	pageModel.queuesView = ko.mapping.fromJS({
		
		queues: [],
		
		show: function() {
			$.getJSON("/api/queues", function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queuesView.queues);
				pageModel.section("queuesView");
			});
		}
	
	});
	
	pageModel.queueView = ko.mapping.fromJS({
		
		queue: {
			name: null
		},
		
		show: function(id) {
			$.getJSON("/api/queue/" + id, function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queueView.queue);
				pageModel.section("queueView");
			});
		}
		
	});
	
	pageModel.queueCreate = ko.mapping.fromJS({
		
		queue: {
			name: null,
		},
		
		show: function() {
			pageModel.section("queueCreate");
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
		"/queues": pageModel.queuesView.show,
		"/queue/new": pageModel.queueCreate.show,
		"/queue/:id": pageModel.queueView.show
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
