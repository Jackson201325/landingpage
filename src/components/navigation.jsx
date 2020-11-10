import React, { useEffect, useState } from "react";
import OV_Blue from "../static/images/OV_Blue.svg"
import { SOLUTIONS, HOWITWORKS, TEAM, CONTACT, TOGNAV } from '../data/constant'
import { Mixpanel } from '../mixpanel';


const Navigation = () => {
  const [shortURL, setShortUrl] = useState(window.location.hash)

  Mixpanel.track_links(".nav a", `${shortURL} clicked`, {
    link_name: shortURL
  })

  // const trackLink = (linkName) => {
  //   ;
  // }

  useEffect(() => {

  }, [shortURL])


  return (
    <nav id="menu" className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            style={{ marginTop: '23px' }}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">{TOGNAV}</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img className="collapsed navbar-toggle mobile-header" src={OV_Blue} alt="Logo" />
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{ paddingLeft: '0px' }}
        >
          <img src={OV_Blue} className="collapsed logo" alt="Logo" />
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                onClick={() => setShortUrl(window.location.hash.substring(1))}
                href={`#${SOLUTIONS.href}`}
                className="page-scroll">
                {SOLUTIONS.name}
              </a>
            </li>
            <li>
              <a
                onClick={() => setShortUrl(window.location.hash.substring(1))}
                // onClick={() => trackLink(HOWITWORKS.name)}
                href={`#${HOWITWORKS.href}`}
                className="page-scroll">
                {HOWITWORKS.name}
              </a>
            </li>
            <li>
              <a
                // onClick={() => trackLink(TEAM.name)}
                onClick={() => setShortUrl(window.location.hash.substring(1))}

                href={`#${TEAM.href}`}
                className="page-scroll">
                {TEAM.name}
              </a>
            </li>
            <li>
              <a
                // onClick={() => trackLink(CONTACT.name)}
                onClick={() => setShortUrl(window.location.hash.substring(1))}
                href={`#${CONTACT.href}`}
                className="page-scroll">
                {CONTACT.name}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
