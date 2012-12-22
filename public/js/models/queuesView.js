/*
 * Queues view view-model.
 */
page.queuesView = {
	
	queues: ko.observableArray(),
	
	show: function() {
		$.getJSON("/api/queues", function(data) {
			ko.mapping.fromJS(data, {}, page.queuesView.queues);
			page.show(page.queuesView);
		});
	}

};
