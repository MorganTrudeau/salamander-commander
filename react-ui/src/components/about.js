import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../App.css";

var Button = require("react-bootstrap/lib/Button");

class About extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<Helmet title="Salamander Commander Web Design and Development - About Us" />
				<div className="about">
					<div className="pageHeader">
						<p className="p1">
							We share your passion for business.
						</p>
						<p />
						<Button className="button">GET A QUOTE</Button>
					</div>

					<div className="cell0">
						<div className="text-row">
							<div className="heading">
								<h3>Who We Are</h3>
							</div>
							<div className="text">
								<h5>
									Passionate programmers dedicated to helping
									businesses take advatage of the online
									marketplace.
								</h5>
								<p>
									We are a small team of experienced software
									engineers who love to build websites...
									especially when they help build businesses.
									Being a small business we want to provide
									quality websites for reasonable prices. We
									can help you take advantage of business
									generated online. Lets get started!
								</p>
								<div className="buttonDiv">
									<Button className="button">
										Get a Free Quote
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className="cell2">
						<div className="text-row">
							<div className="heading">
								<h3>What We Do</h3>
							</div>
							<div className="text">
								<h5>
									We design and develop impactful websites
									that turn vistors into customers.
								</h5>
								<p>
									Our goal is to build websites that not only
									look good, but work. Generating online
									business requires Our proven design and
									development process ensures you receive a
									powerful and effective website.
								</p>
								<div className="buttonDiv">
									<Button className="button">
										Learn About Our Process
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="cell3 whiteText centerText">
						<h3>We would love to hear from you</h3>
						<Button className="whiteButton">Contact US</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
