/*
 * Queue view view-model.
 */
define(["knockout", "knockoutmapping", "models/page"], function(ko, mapping, page) {

	page.queueView = {
		
		queue: mapping.fromJS({
			name: null
		}),
		
		show: function(id) {
			$.getJSON("/api/queue/" + id, function(data) {
				mapping.fromJS(data, {}, page.queueView.queue);
				page.show(page.queueView);
			});
		}
		
	};

});
