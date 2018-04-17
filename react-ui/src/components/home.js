import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import platforms from '../images/platforms.png';


var Button = require('react-bootstrap/lib/Button');



class Home extends Component {
  render() {
    return (
    	<div>
	    	<div className="home">
	    			<div className="homeCell0">
	    				<p>Developing beautiful, responsive websites</p>
	    				<p>with the power of React.</p>
	    				<Link to="/contact">
							<Button className="button">
					     		START YOUR WEBSITE
					    	</Button>
				    	</Link>

	    			</div>
	    	</div>
	    			<div className="homeHeader">
	    				<div className="headerCell0">
	    					<p>WEBSITES THAT WORK FOR YOU</p>
	    				</div>

	    				<div className="headerCell1">
	    					<div className="title">
	    						<h3>Appealing</h3>
	    					</div>
	    					<div className="textBlock">
	    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
	    					</div>
	    				</div>

	    				<div className="headerCell2">
	    					<div className="title">
	    						<h3>Responsive</h3>
	    					</div>
	    					<div className="textBlock">
	    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
	    					</div>
	    				</div>

	    				<div className="headerCell3">
	    					<div className="title">
	    						<h3>Effective</h3>
	    					</div>
	    					<div className="textBlock">
	    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
	    					</div>
	    				</div>

						<div className="headerCell4">
							<Link to="/about">
								<Button className="button1">
					     			WHO WE ARE
					    		</Button>
				    		</Link>

				    		<Link to="/projects">
								<Button className="button2">
					     			VIEW PORTFOLIO
					    		</Button>
				    		</Link>

				    		<Link to="/contact">
								<Button className="button3">
					     			GET A QUOTE
					    		</Button>
				    		</Link>
						</div>	    				
	    			</div>

			        <div className="homeCell2-1">
	    				<img src={platforms} width="100%" alt="iphone mac tablet computer platforms website design" />
	    			</div>

	    			<div className="homeCell3">
	    				<p>CUSTOMIZED SERVICES AND SOLUTIONS</p>
	    			</div>

	    			<div className="homeCell4">
	    				<div className="homeCell4-1">
	    					<div className="header4">
	    						<h3>RESPONSIVE WEB DESIGN</h3>
	    					</div>
	    					<div className="textBlock">
	    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
	    					</div>
	    					<Link to="/services">
								<Button className="button">
					     			LEARN MORE
					    		</Button>
				    		</Link>
	    				</div>

	    				<div className="homeCell4-2">
	    					<div className="header4">
	    						<h3>ECOMMERCE STORES</h3>
	    					</div>
	    					<div className="textBlock">
	    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
	    					</div>
	    					<Link to="/services">
								<Button className="button">
					     			LEARN MORE
					    		</Button>
				    		</Link>
	    				</div>

	    				<div className="homeCell4-3">
	    					<div className="header4">
	    						<h3>LOGO DESIGN</h3>
	    					</div>
	    					<div className="textBlock">
	    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
	    					</div>
	    					<Link to="/services">
								<Button className="button">
					     			LEARN MORE
					    		</Button>
				    		</Link>
	    				</div>

	    				<div className="homeCell4-4">
	    					<div className="header4">
	    						<h3>SEARCH ENGINE OPTIMIZATION</h3>
	    					</div>
	    					<div className="textBlock">
	    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
	    					</div>
	    					<Link to="/services">
								<Button className="button">
					     			LEARN MORE
					    		</Button>
				    		</Link>
	    				</div>
	    			</div>

	      		
      	</div>
    );

  }

}

export default Home;