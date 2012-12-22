/*
 * View model for creating a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var emptyQueue = {
		name: null
	};
	
	page.queueCreate = {
		
		queue: mapping.fromJS(emptyQueue),
		
		show: function() {
			page.queueCreate.reset();
			page.show(page.queueCreate);
		},
		
		create: function() {
			$.postJSON("/api/queues", ko.toJSON(this.queue), function(data) {
				window.location.hash = "/queue/" + data.id;
			});
		},
		
		reset: function() {
			mapping.fromJS(emptyQueue, page.queueCreate.queue);
		}
		
	};
	
});
