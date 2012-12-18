/*
 * Queue resource.
 */

var queues =
[
	{
		name: "Logistics"
	},
	{
		name: "Pricing Management"
	}
];

exports.list = function(request, response)
{
	response.send(queues);
};
