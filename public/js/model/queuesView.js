/*
 * View model for listing the queues.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {
	
	page.queuesView = {
		
		queues: ko.observableArray(),
		
		load: function() {
			$.getJSON("/api/queues", function(data) {
				mapping.fromJS(data, {}, page.queuesView.queues);
			});
		},
		
		show: function() {
			page.queuesView.load();
			page.show("queuesView");
		}
		
	};
	
});
