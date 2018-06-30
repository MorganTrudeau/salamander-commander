var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
("use strict");
const nodemailer = require("nodemailer");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Console.log req info
router.use(function(req, res, next) {
    console.log(`Request body: ${JSON.stringify(req.body)}'`);
    next();
});

router.post("/", function(req, res, next) {
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

module.exports = router;
