import React, { Component } from "react";
import scLogo from "../images/salamander-commander-ecommerce-website-design-logo-white.png";
import "../App.css";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="headerLogo">
					<img
						src={scLogo}
						height="35px"
						alt="salamander-commander-ecommerce-website-design-logo-white"
					/>
				</div>
			</div>
		);
	}
}

export default Header;
