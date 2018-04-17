import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import reactLogo from '../images/react.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/CSS3.png';
import jsHeart from '../images/jsHeart.png';

var Button = require('react-bootstrap/lib/Button');

class About extends Component {
  render() {
    return (
    	<div>
	    	<div className="about">
	    		<div className="pageHeader">
	    			<p className="p1">We share your passion for building businesses.</p>
	    			<Button className="button">
					  GET A QUOTE
					</Button>
	    		</div>

	    		<div className="aboutCell0">
	    			<img src={ reactLogo } height="80px" alt="react javascript website"/>
	    			<p>Powered by React</p>
	    		</div>
	    		<div className="aboutCell1">
	    		</div>
	    		<div className="aboutCell2">
	    		</div>
	      	</div>	
      	</div>
    );
  }
}

export default About;