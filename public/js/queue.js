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
			$.getJSON("/api/queues", function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queues);
				pageModel.section("queuesView");
			});
		},
		
		"/queue/new": function() {
			pageModel.section("queueCreate");
		},
		
		"/queue/:id": function(id) {
			$.getJSON("/api/queue/" + id, function(data) {
				ko.mapping.fromJS(data, {}, pageModel.queue);
				pageModel.section("queueView");
			});
		}
		
	}).init("/queues");
	
});
