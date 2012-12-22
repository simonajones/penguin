/*
 * Queue create view-model.
 */
page.queueCreate = {
	
	queue: ko.mapping.fromJS({
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
