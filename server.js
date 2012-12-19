/**
 * Module dependencies.
 */

var express = require("express"),
	queue = require("./routes/queue"),
	http = require("http"),
	path = require("path");

var app = express();

app.configure(function()
{
	app.set("port", process.env.PORT || 8080);
	app.use(express.favicon());
	app.use(express.logger("dev"));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, "public")));
});

app.configure("development", function()
{
	app.use(express.errorHandler());
});

app.get("/api/queues", queue.list);
app.get("/api/queue/:id", queue.get);

http.createServer(app).listen(app.get("port"), function()
{
	console.log("Express server listening on port " + app.get("port"));
});
