import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import phoneIconGrey from "../images/salamander-commander-responsive-web-design.png";
import googleIcon from "../images/salamander-commander-seo-search-engine-optimization.png";
import cameraIcon from "../images/salamander-commander-website-design-professional-photography.png";
import react from "../images/salamander-commander-ecommerce-website-design-react.png";

class Services extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<Helmet title="Salamander Commander Web Design and Development - Services" />
				<div className="services">
					<div className="pageHeader">
						<p className="p1">Don't settle for just a website.</p>
						<p className="p2">We offer the whole package.</p>
					</div>

					<div className="cell0" />

					<div className="servicesCells">
						<div className="servicesCell">
							<div className="icon">
								<img
									src={phoneIconGrey}
									height="60px"
									alt="salamander-commander-responsive-web-design"
								/>
							</div>
							<div className="title">
								<p>RESPONSIVE WEB DESIGN</p>
							</div>
							<div className="textBlock">
								<p>
									A new approach to web design which makes web
									pages render well on a variety of devices
									and window or screen sizes. Content, design
									and performance are necessary across all
									devices to ensure usability and
									satisfaction.
								</p>
							</div>
						</div>

						<div className="servicesCell">
							<div className="icon">
								<img
									src={react}
									height="60px"
									alt="salamander-commander-seo-search-engine-optimization"
								/>
							</div>
							<div className="title">
								<p>SINGLE PAGE APPLICATIONS</p>
							</div>
							<div className="textBlock">
								<p>
									The fastest websites on the internet. We
									develop Single Page Applications using a
									language called React developed by Facebook.
									This allows us to build websites that change
									content without loading new pages. Faster
									navigation results in a more enjoyable user
									experience.
								</p>
							</div>
						</div>

						<div className="servicesCell">
							<div className="icon">
								<img
									src={googleIcon}
									height="60px"
									alt="salamander-commander-seo-search-engine-optimization"
								/>
							</div>
							<div className="title">
								<p>SEARCH ENGINE OPTIMIZATION</p>
							</div>
							<div className="textBlock">
								<p>
									SEO gets your website seen on search engine
									results. This increases traffic and
									potential business. Every website we design
									is fully compatible with the top search
									engines inlcuding Google, Bing and Yahoo.
								</p>
							</div>
						</div>

						<div className="servicesCell1">
							<div className="icon">
								<img
									src={cameraIcon}
									height="60px"
									alt="salamander-commander-website-design-professional-photography"
								/>
							</div>
							<div className="title">
								<p>PHOTOGRAPHY</p>
							</div>
							<div className="textBlock">
								<p>
									Using professional photography results in
									visually compelling websites that grab a
									users attetion. We provide original, high
									quality photos to make your website stand
									out.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;

/*<div className="servicesCell">
	<div className="icon">
		<img
			src={storeIcon}
			height="60px"
			alt="salamander-commander-ecommerce-website-design-development"
		/>
	</div>
	<div className="title">
		<p>ECOMMERCE STORES</p>
	</div>
	<div className="textBlock">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
			odio. Praesent libero.
		</p>
	</div>
</div>*/

/*<div className="servicesCell">
	<div className="icon">
		<img
			src={artIcon}
			height="60px"
			alt="salamander-commander-website-design-logo"
		/>
	</div>
	<div className="title">
		<p>LOGO DESIGN</p>
	</div>
	<div className="textBlock">
		<p>
			Our talented graphic designers can provide you with customized logos
			to
		</p>
	</div>
</div>;*/
