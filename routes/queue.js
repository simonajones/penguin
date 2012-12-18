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
