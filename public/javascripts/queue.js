// Queue View

$(function() {
	
	var Queue = Backbone.Model.extend({
		
	});
	
	var Queues = Backbone.Collection.extend({
		
		url: "/api/queues",
		
		model: Queue
		
	});
	
	var QueueListItemView = Backbone.View.extend({
		
		model: new Queue(),
		
		tagName: "li",
		
		template: _.template($("#queueListItemTemplate").html()),
			
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	var QueueListView = Backbone.View.extend({
		
		model: new Queues(),
		
		tagName: "ul",
		
		initialize: function() {
			this.model.bind("reset", this.render, this);
			this.model.fetch();
		},
		
		render: function() {
			this.$el.empty();
			_.each(this.model.models, function(item) {
				var itemView = new QueueListItemView({model: item});
				this.$el.append(itemView.render().el);
			}, this);
			return this;
		},
		
	});
	
	var QueueRouter = Backbone.Router.extend({
		
		routes: {
			"": "list",
			"queue/:id": "queue"
		},
		
		list: function() {
			$("#content").html(new QueueListView().render().el);
		},
		
		queue: function(id) {
			$("#content").html("Queue #" + id);
		}
		
	});
	
	new QueueRouter();
	Backbone.history.start();
	
});
