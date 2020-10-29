import React from "react";
import { Grid } from "@material-ui/core";
import ClemsonLogo from "../static/images/Clemson.svg"
import LSULogo from "../static/images/LSU.svg"
import OhioStaeLogo from "../static/images/Ohio State.svg"
import RutgersLogo from "../static/images/Rutgers.svg"

const Services = () => {
  return (
    <div id="programs" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Top Programs are finding ways to connect</h2>
        </div>
        <div className="row">
          <Grid container >
            <Grid container item md={3} className="logos">
              <img style={{ cursor: "pointer" }} onClick={() => window.open("https://clemsontigers.com/sports/football", "_blank")} src={ClemsonLogo} alt="Clemson Logo" />
            </Grid>
            <Grid container item md={3} className="logos">
              <img style={{ cursor: "pointer" }} onClick={() => window.open("https://lsusports.net/sports/football", "_blank")} src={LSULogo} alt="LSU Logo" />
            </Grid>
            <Grid container item md={3} className="logos">
              <img style={{ cursor: "pointer" }} onClick={() => window.open("https://ohiostatebuckeyes.com/sports/m-footbl/", "_blank")} src={OhioStaeLogo} alt="OhioState Logo" />
            </Grid>
            <Grid container item md={3} className="logos">
              <img style={{ cursor: "pointer" }} onClick={() => window.open("https://scarletknights.com/sports/football", "_blank")} src={RutgersLogo} alt="Rutgers Logo" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Services;
