/*
 * Queues view view-model.
 */
var queuesView = {
	
	queues: ko.observableArray(),
	
	show: function() {
		$.getJSON("/api/queues", function(data) {
			ko.mapping.fromJS(data, {}, queuesView.queues);
			page.show(queuesView);
		});
	}

};
