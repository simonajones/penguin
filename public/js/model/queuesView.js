/*
 * View model for listing the queues.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {
	
	page.queuesView = {
		
		queues: ko.observableArray(),
		
		show: function() {
			$.getJSON("/api/queues", function(data) {
				mapping.fromJS(data, {}, page.queuesView.queues);
				page.show(page.queuesView);
			});
		}

	};
	
});
