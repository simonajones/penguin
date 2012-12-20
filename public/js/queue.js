// Queue View

$(function() {
	
	// ------------------------------------------------------------------------
	// Models
	// ------------------------------------------------------------------------
	
	var pageModel = ko.mapping.fromJS({
		section: "queuesView",
		queues: [],
		queue: {
			name: null
		}
	});
	
	ko.applyBindings(pageModel);
	
	// ------------------------------------------------------------------------
	// Router
	// ------------------------------------------------------------------------
	
	Router({
		
		"/queues": function() {
			pageModel.section("queuesView");
			$.getJSON("/api/queues", function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queues);
			});
		},
		
		"/queue/new": function() {
			pageModel.section("queueCreate");
		},
		
		"/queue/:id": function(id) {
			pageModel.section("queueView");
			$.getJSON("/api/queue/" + id, function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queue);
			});
		}
		
	}).init("/queues");
	
});
