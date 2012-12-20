// Queue Resource

var identifier = 1;

var createQueue = function(name)
{
	return {
		id: identifier++,
		name: name
	};
};

var queues =
[
	createQueue("Logistics"),
	createQueue("Pricing Management")
];

exports.list = function(request, response)
{
	response.send(queues);
};

exports.get = function(request, response)
{
	var id = request.params.id - 1;
	
	response.send(queues[id] || 404);
};

exports.create = function(request, response)
{
	var name = request.body.name;
	var queue = createQueue(name);

	queues.push(queue);
	
	// TODO: return new queue id
	response.send(201);
};
