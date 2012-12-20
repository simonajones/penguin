// Queue View

$(function() {
	
	// ------------------------------------------------------------------------
	// Models
	// ------------------------------------------------------------------------
	
	var Queue = Backbone.Model.extend({
		
		urlRoot: "/api/queue"
		
	});
	
	var Queues = Backbone.Collection.extend({
		
		url: "/api/queues",
		
		model: Queue
		
	});
	
	// ------------------------------------------------------------------------
	// Views
	// ------------------------------------------------------------------------
	
	var QueueView = Backbone.View.extend({
		
		model: new Queue(),
		
		template: _.template($("#queueTemplate").html()),
		
		initialize: function() {
			this.model.bind("change", this.render, this);
			this.model.fetch();
		},
		
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	var QueueCreateView = Backbone.View.extend({
		
		model: new Queue(),
		
		template: _.template($("#queueCreateTemplate").html()),
		
		initialize: function() {
			this.model.bind("change", this.render, this);
		},
		
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	var QueueListItemView = Backbone.View.extend({
		
		model: new Queue(),
		
		template: _.template($("#queueListItemTemplate").html()),
			
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	var QueueListView = Backbone.View.extend({
		
		model: new Queues(),
		
		template: _.template($("#queueListTemplate").html()),
		
		initialize: function() {
			this.model.bind("reset", this.render, this);
			this.model.fetch();
		},
		
		render: function() {
			
			var itemViews = [];
			
			_.each(this.model.models, function(item) {
				var itemView = new QueueListItemView({model: item});
				itemViews.push(itemView.render().$el.html());
			}, this);
			
			this.$el.html(this.template({items: itemViews}));
			
			return this;
		},
		
	});
	
	// ------------------------------------------------------------------------
	// Router
	// ------------------------------------------------------------------------
	
	var QueueRouter = Backbone.Router.extend({
		
		routes: {
			"": "list",
			"queue/new": "create",
			"queue/:id": "queue"
		},
		
		list: function() {
			$("#content").html(new QueueListView().render().el);
		},
		
		queue: function(id) {
			var queueView = new QueueView({model: new Queue({id: id})});
			$("#content").html(queueView.render().el);
		},
		
		create: function() {
			$("#content").html(new QueueCreateView().render().el);
		},
		
	});
	
	new QueueRouter();
	Backbone.history.start();
	
});
