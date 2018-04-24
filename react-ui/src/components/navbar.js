import React, { Component } from "react";

var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");

class NavbarInstance extends Component {
  render() {
    return (
      <div className="nav">
        <Navbar collapse inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <div className="navItems">
              <Nav>
                <li role="presentation">
                  <a href="/">Home</a>
                </li>
                <li role="presentation">
                  <a href="/about">About</a>
                </li>
                <li role="presentation">
                  <a href="/services">Services</a>
                </li>
                <li role="presentation">
                  <a href="/projects">Projects</a>
                </li>
                <li role="presentation">
                  <a href="/contact">Contact</a>
                </li>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarInstance;
