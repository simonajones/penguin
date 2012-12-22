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
			$.postJSON("/api/queues", ko.toJSON(this.queue), function() {
				// TODO: show new queue
				window.location.hash = "/queues";
			});
		},
		
		reset: function() {
			mapping.fromJS(emptyQueue, page.queueCreate.queue);
		}
		
	};
	
});
