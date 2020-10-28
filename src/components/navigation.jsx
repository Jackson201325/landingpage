import React, { Component } from "react";
import OFlogo from "../static/images/dark-blue-logo.png"
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <img className="collapsed navbar-toggle" style={{ width: "55%", border: 'none' }} src={OFlogo} alt="Logo" />
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <img src={OFlogo} alt="Logo" />
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
