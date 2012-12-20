// Queue Resource

var queues =
[
	{
		id: 1,
		name: "Logistics"
	},
	{
		id: 2,
		name: "Pricing Management"
	}
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

	// TODO: create queue
	console.log("Create Queue: " + name);
	
	// TODO: return new queue id
	response.send(201);
};
