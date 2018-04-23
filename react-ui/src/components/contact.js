import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import emailIcon from "../images/salamander-commander-website-design-email.png";
import phoneIcon from "../images/salamander-commander-website-design-phone.png";
import pinIcon from "../images/salamander-commander-website-design-location.png";

var FormControl = require("react-bootstrap/lib/FormControl");
var Button = require("react-bootstrap/lib/Button");

function sendEmail(name, email, message) {
	try {
		fetch("email", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				email: email,
				message: message
			})
		});
	} catch (err) {
		console.log(err);
	}
}

function validateForm(name, email) {
	if (name.trim() !== "" && email.trim() !== "") {
		return true;
	} else {
		return false;
	}
}

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		window.scrollTo(0, 0);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const name = this.state.name;
		const email = this.state.email;
		const message = this.state.message;

		if (validateForm(name, email)) {
			alert("Thank you. We will respond as soon as possible");
			sendEmail(name, email, message);
		}
	}

	render() {
		return (
			<div>
				<Helmet title="Salamander Commander Web Design and Development - Contact" />
				<div className="contact">
					<div className="contactInfo">
						<div className="contactCell email">
							<img
								src={emailIcon}
								height="80px"
								alt="salamander-commander-website-design-email"
							/>
							<p>salcomwebdesign@gmail.com</p>
						</div>
						<div className="contactCell phone">
							<img
								src={phoneIcon}
								height="80px"
								alt="salamander-commander-website-design-phone"
							/>
							<p>778-808-9036</p>
						</div>
						<div className="contactCell location">
							<img
								src={pinIcon}
								height="80px"
								alt="salamander-commander-website-design-location"
							/>
							<p>Langley, BC, Canada</p>
						</div>
					</div>
					<div className="messageWrapper">
						<div className="messageFormHeader">
							<p>LETS TALK ABOUT YOUR PROJECT</p>
						</div>
					</div>

					<div className="messageForm">
						<form className="form" onSubmit={this.handleSubmit}>
							<FormControl
								className="nameInput"
								type="text"
								name="name"
								value={this.state.name}
								placeholder="Name"
								onChange={this.handleChange}
							/>
							<FormControl
								className="emailInput"
								type="email"
								name="email"
								value={this.state.email}
								placeholder="Email"
								onChange={this.handleChange}
							/>
							<p style={{ textAlign: "left", marginTop: "30px" }}>
								Please include the following in the "Additional
								Details" section.
							</p>
							<ul
								style={{
									textAlign: "left",
									marginBottom: "30px"
								}}
							>
								<li>
									Type of website eg. Construction, Design,
									Blog etc.
								</li>
								<li>Approximate budget</li>
								<li>
									Any questions you have about the web design
									process
								</li>
							</ul>
							<FormControl
								className="textArea"
								componentClass="textarea"
								name="message"
								value={this.state.message}
								placeholder="Additional Details"
								onChange={this.handleChange}
								rows={5}
							/>
							<Button className="button" type="submit">
								Submit
							</Button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
