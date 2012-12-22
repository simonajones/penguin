/*
 * Queue view view-model.
 */
page.queueView = {
	
	queue: ko.mapping.fromJS({
		name: null
	}),
	
	show: function(id) {
		$.getJSON("/api/queue/" + id, function(data) {
			ko.mapping.fromJS(data, {}, page.queueView.queue);
			page.show(page.queueView);
		});
	}
	
};
