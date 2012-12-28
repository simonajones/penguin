/*
 * Penguin server.
 */
var express = require("express");
var http = require("http");
var path = require("path");

var queue = require("./routes/queue");
var story = require("./routes/story");

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
app.post("/api/queues", queue.create);
app.post("/api/story", story.add);

http.createServer(app).listen(app.get("port"), function()
{
	console.log("Server listening on port " + app.get("port"));
	queue.load();
});
