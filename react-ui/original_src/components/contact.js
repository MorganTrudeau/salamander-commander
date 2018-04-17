import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import emailIcon from '../images/emailIcon.png';
import phoneIcon from '../images/phoneIcon.png';
import pinIcon from '../images/pinIcon.png';



var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');

class Contact extends Component {
  render() {
    return (
    	<div>
	    	<div className="contact">
	    		<div className="contactHeader">
	    		</div>
	    		<div className="contactInfo">
	    			<div className="email">
	    				<img src={ emailIcon } height="100px" alt="" />
	    				<p>salcomweb@gmail.com</p>
	    			</div>
	    			<div className="phone">
	    				<img src={ phoneIcon } height="100px" alt="" />
	    				<p>778-808-9036</p>
	    			</div>
	    			<div className="location">
	    				<img src={ pinIcon } height="100px" alt="" />
	    				<p>Langley, BC, Canada</p>
	    			</div>
	    		</div>
	    		<div className="messageWrapper">
		    		<div className="messageFormHeader">
		    			<p>LETS TALK ABOUT YOUR PROJECT</p>
		    		</div>
	    		</div>

	    		<div className="messageForm">
	    			<FormControl 
	    				className="nameInput"
	    				type="text"
	    				placeholder="Name"
	    			/>
	    			<FormControl 
	    				className="emailInput"
	    				type="email"
	    				placeholder="Email"
	    			/>
	    			<FormControl 
	    				className="textArea"
	    				componentClass="textarea" 
	    				placeholder="Message" />
	    			<Button className="button" type="submit">
				     	Submit
				    </Button>
	    		</div>
	      	</div>	
      	</div>
    );

  }

}

export default Contact;