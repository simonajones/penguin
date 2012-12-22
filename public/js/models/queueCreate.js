/*
 * View model for creating a queue.
 */
define(["knockout", "knockout-mapping", "models/page", "jquery-json"], function(ko, mapping, page) {
	
	page.queueCreate = {
		
		queue: mapping.fromJS({
			name: null,
		}),
		
		show: function() {
			// TODO: reset model
			page.show(page.queueCreate);
		},
		
		create: function() {
			$.postJSON("/api/queues", ko.toJSON(this.queue), function() {
				// TODO: show new queue
				window.location.hash = "/queues";
			});
		},
		
	};
	
});
