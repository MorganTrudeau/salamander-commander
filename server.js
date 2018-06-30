const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(
	require("prerender-node").set("prerenderToken", "3zmHynW14xC8BKv7P7v6")
);

// Routes
const emailRoute = require("./routes/email");

app.get("/http-site-map.xml", function(request, response) {
	response.sendFile(path.resolve(__dirname, "http-site-map.xml"));
});

app.get("/https-site-map.xml", function(request, response) {
	response.sendFile(path.resolve(__dirname, "https-site-map.xml"));
});

// app.use("/email/", emailRoute);

var bodyParser = require("body-parser");
("use strict");
const nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Console.log req info
app.use(function(req, res, next) {
	console.log(`Request body: ${JSON.stringify(req.body)}'`);
	next();
});

app.post("/email", function(req, res, next) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "salcombot@gmail.com",
			pass: "Gummiworm0+"
		}
	});

	const emailBody = req.body;
	const name = emailBody.name;
	const email = emailBody.email;
	const phone = emailBody.phone;
	const message = emailBody.message;

	const mailOptions = {
		from: '"The Salamander Commander 👻" <salcombot@gmail.com>', // sender address
		to: "salcomwebdesign@gmail.com", // list of receivers
		subject: "Job Request", // Subject line
		html: `<p>Name: ${name}</p></br><p>Email: ${email}</p></br><p>Phone: ${phone}</p></br><p>${message}</p>` // html body
	};

	transporter.sendMail(mailOptions, function(err, res) {
		if (err) {
			console.error("there was an error: ", err);
		} else {
			console.log("here is the res: ", res);
		}
	});
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "./react-ui/build")));

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
	response.sendFile(
		path.resolve(__dirname, "./react-ui/build", "index.html")
	);
});

app.listen(PORT, function() {
	console.error(`Listening on port ${PORT}`);
});
