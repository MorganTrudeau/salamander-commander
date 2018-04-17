import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import lynxWeb from '../images/lynxWeb.png';
import hsmWeb from '../images/hsmWeb.png';


var Button = require('react-bootstrap/lib/Button');

class Projects extends Component {
  render() {
    return (
    	<div>
	    	<div className="projects">
	    		<div className="pageHeader">
	    			<p className="p1">Make a good first impression.</p>
	    			<p className="p2">Let our beautiful web designs help you.</p>
	    		</div>

	    		<div className="hsmWeb">
	    			<img src={ hsmWeb } width="100%" alt="harbourview sheetmetal" />
		    		<div className="projectButtons">
			    		<Button className="button" type="submit">
						  View Project
						</Button>
						<Button className="button" type="submit">
						  View Site
						</Button>
					</div>
				</div>

	    		<div className="lynxWeb">
	    			<img src={ lynxWeb } width="100%" alt="lynx landscaping" />
		    		<div className="projectButtons">
			    		<Button className="button" type="submit">
						  View Project
						</Button>
						<Button className="button" type="submit">
						  View Site
						</Button>
					</div>
				</div>
	      	</div>	
      	</div>
    );

  }

}

export default Projects;