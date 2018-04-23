import React, { Component } from "react";
import HelmetWrapper from "./HelmetWrapper";
import "../App.css";
import lynxWeb from "../images/salamander-commander-website-design-projects-construction-1.png";
import hsmWeb from "../images/salamander-commander-website-design-projects-construction-2.png";
import dlm from "../images/salamander-commander-website-design-projects-construction-0.png";

var Button = require("react-bootstrap/lib/Button");

class Projects extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<HelmetWrapper
					title={
						"Salamander Commander Web Design and Development - Projects"
					}
					description={
						"Profit from online customers with an effective website designed by Salamander Commander. Check out our work."
					}
				/>
				<div className="projects">
					<div className="pageHeader">
						<p className="p1">Make a good first impression.</p>
						<p className="p2">
							Let our powerful web designs help you.
						</p>
					</div>

					<div className="web">
						<img
							src={lynxWeb}
							width="100%"
							alt="salamander-commander-website-design-projects-construction"
						/>
						<div className="projectButtons">
							<a href="https://lynx-landscaping.herokuapp.com/">
								<Button className="button">View Site</Button>
							</a>
						</div>
					</div>

					<div className="web">
						<img
							src={dlm}
							width="100%"
							alt="salamander-commander-website-design-projects-construction"
						/>
						<div className="projectButtons">
							<Button className="button">
								Under Construction
							</Button>
						</div>
					</div>

					<div className="web">
						<img
							src={hsmWeb}
							width="100%"
							alt="salamander-commander-website-design-projects-construction"
						/>
						<div className="projectButtons">
							<Button className="button">
								Under Construction
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
