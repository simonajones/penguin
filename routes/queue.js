/*
 * Queue resource.
 */
var queues = [];

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
	
	response.send(201, {id: queue.id});
};

var identifier = 1;

var createQueue = function(name)
{
	return {
		id: identifier++,
		name: name
	};
};
