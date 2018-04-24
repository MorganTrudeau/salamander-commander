import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import platforms from "../images/salamander-commander-website-design-platforms.jpg";
import stars from "../images/salamander-commander-website-design-stars.jpg";
import { Helmet } from "react-helmet";
import lynx from "../images/salamander-commander-website-design-projects-construction-1-500x311.png";
import hsm from "../images/salamander-commander-website-design-projects-construction-2-500x311.png";
import dlm from "../images/salamander-commander-website-design-projects-construction-0-500x311.png";

var Button = require("react-bootstrap/lib/Button");

class Home extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="home">
				<Helmet title="Salamander Commander | Web Design and Development" />
				<div>
					<div
						className="cell0 parallax"
						style={{ backgroundImage: `url(${stars})` }}
					>
						<div className="smoke">
							<h1>Building websites</h1>
							<h2>that build businesses.</h2>
							<Link to="/contact">
								<Button className="button">
									LET'S GET STARTED
								</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className="homeHeader">
					<div className="headerCell0">
						<h3>WEBSITES THAT WORK FOR YOU</h3>
					</div>

					<div className="headerCell1">
						<div>
							<h5>SEO Friendly</h5>
						</div>
						<div className="textBlock">
							<p>
								Search Engine Optimization maximizes visitors -
								your website will rank high on Google search
								results.
							</p>
						</div>
					</div>

					<div className="headerCell2">
						<div>
							<h5>Responsive</h5>
						</div>
						<div className="textBlock">
							<p>
								Responsive web design allows the layout of your
								website to adapt to any device and screen size.
								Ensure your website always looks good!
							</p>
						</div>
					</div>

					<div className="headerCell3">
						<div>
							<h5>Compelling</h5>
						</div>
						<div className="textBlock">
							<p>
								High quality graphic design and text reflect the
								unique excellence of your business and turn
								visitors into customers.
							</p>
						</div>
					</div>

					<div className="headerCell4">
						<Link to="/about">
							<Button className="button1">WHO WE ARE</Button>
						</Link>

						<Link to="/projects">
							<Button className="button2">VIEW PORTFOLIO</Button>
						</Link>

						<Link to="/contact">
							<Button className="button3">GET A QUOTE</Button>
						</Link>
					</div>
				</div>

				<div className="cell1 text-row secondaryBGColor">
					<div className="heading">
						<h3>Web Design & Development</h3>
					</div>
					<div className="text">
						<div className="text">
							<h5>
								Providing the best webstites for the Lower
								Mainland.
							</h5>
							<p>
								We can get your business noticed online. Prouldy
								serving the Lower Mainland with powerful online
								marketing that effectively generates customers.
								Our expertise in web design and development
								ensure you will receive a modern website that
								provides results.
							</p>
						</div>
					</div>
				</div>

				<div className="homeProjects secondaryBGColor">
					<div className="web">
						<img
							src={lynx}
							width="100%"
							alt="salamander-commander-website-design-projects-construction"
						/>
					</div>
					<div className="web">
						<img
							src={dlm}
							width="100%"
							alt="salamander-commander-website-design-projects-construction"
						/>
					</div>
					<div className="web">
						<img
							src={hsm}
							width="100%"
							alt="salamander-commander-website-design-projects-construction"
						/>
					</div>
				</div>

				<div className="homeCell2">
					<p className="p1">WEBSITES THAT</p>
					<p className="p2">COMMAND ATTENTION</p>
				</div>

				<div className="homeCell2-1">
					<img
						src={platforms}
						width="100%"
						alt="salamander-commander-website-design-platforms"
					/>
				</div>

				<div className="homeCell3">
					<p>CUSTOMIZED SERVICES AND SOLUTIONS</p>
				</div>

				<div className="homeCell4">
					<div className="homeCell4-1 gridCol">
						<div className="header4">
							<h4>SINGLE PAGE APPLICATIONS</h4>
						</div>
						<div className="textBlock">
							<p>
								We use the lastest technology in web development
								to build the fastest websites on the internet
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>

					<div className="homeCell4-2 gridCol">
						<div className="header4">
							<h4>RESPONSIVE WEB DESIGN</h4>
						</div>
						<div className="textBlock">
							<p>
								Making sure you your website can support every
								device on the market.
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>

					<div className="homeCell4-3 gridCol">
						<div className="header4">
							<h4>PHOTOGRAPHY</h4>
						</div>
						<div className="textBlock">
							<p>
								Modern websites with original, professional
								photography.
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>

					<div className="homeCell4-4 gridCol">
						<div className="header4">
							<h4>SEARCH ENGINE OPTIMIZATION</h4>
						</div>
						<div className="textBlock">
							<p>
								Get your website seen on google with cutting
								edge SEO.
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
