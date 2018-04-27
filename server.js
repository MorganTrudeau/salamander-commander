const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(
	require("prerender-node").set("prerenderToken", "3zmHynW14xC8BKv7P7v6")
);

// Routes
const emailRoute = require("./routes/email");

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "./react-ui/build")));

app.get("/http-site-map.xml", function(request, response) {
	response.sendFile(path.resolve(__dirname, "http-site-map.xml"));
});

app.get("/https-site-map.xml", function(request, response) {
	response.sendFile(path.resolve(__dirname, "https-site-map.xml"));
});

app.get("/banner-img", function(request, response) {
	response.sendFile(
		path.resolve(__dirname, "salamander-commander-banner.jpg")
	);
});

app.get("/platforms-img", function(request, response) {
	response.sendFile(
		path.resolve(
			__dirname,
			"salamander-commander-website-design-platforms.jpg"
		)
	);
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
	response.sendFile(
		path.resolve(__dirname, "./react-ui/build", "index.html")
	);
});

app.listen(PORT, function() {
	console.error(`Listening on port ${PORT}`);
});

app.use("/email/", emailRoute);
