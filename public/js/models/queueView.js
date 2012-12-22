/*
 * Queue view view-model.
 */
var queueView = {
	
	queue: ko.mapping.fromJS({
		name: null
	}),
	
	show: function(id) {
		$.getJSON("/api/queue/" + id, function(data) {
			ko.mapping.fromJS(data, {}, queueView.queue);
			page.show(queueView);
		});
	}
	
};
