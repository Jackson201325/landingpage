import React from "react";
import OFlogo from "../static/images/dark-blue-logo.png"
import { MixpanelConsumer } from 'react-mixpanel';
import { SOLUTIONS, HOWITWORKS, TEAM, CONTACT, TOGNAV } from '../data/constant'

const Navigation = () => {
  return (
    <MixpanelConsumer>
      {
        mixpanel => (
          <nav id="menu" className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">{TOGNAV}</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <img className="collapsed navbar-toggle mobile-header" src={OFlogo} alt="Logo" />
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <img src={OFlogo} className="collapsed logo" alt="Logo" />
                <ul className="nav navbar-nav navbar-right">
                  {
                    [SOLUTIONS, HOWITWORKS, TEAM, CONTACT].map(link => {
                      return (
                        <li>
                          <a onClick={() => {
                            mixpanel.track("Click", { link });
                          }} href="#features" className="page-scroll">
                            {link}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </nav>
        )
      }
    </MixpanelConsumer>
  )
}

export default Navigation;
