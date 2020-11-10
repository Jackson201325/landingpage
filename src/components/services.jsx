import React from "react";
import { Grid } from "@material-ui/core";
import ClemsonLogo from "../static/images/Clemson.svg"
import LSULogo from "../static/images/LSU.svg"
import OhioStaeLogo from "../static/images/Ohio State.svg"
import RutgersLogo from "../static/images/Rutgers.svg"
import { PROMGRAMS } from "../data/constant"


const Porgrams = () => {

  return (
    <div id="programs" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{PROMGRAMS.title}</h2>
        </div>
        <div className="row">
          <Grid container >
            <Grid container item xs={3} className="logos">
              <Grid container item justify="center" alignItems="center" className="big-logo">
                <img onClick={() => window.open("https://clemsontigers.com/sports/football", "_blank")} src={ClemsonLogo} alt="Clemson Logo" />
                <p>daboswinney.com</p>
              </Grid>
            </Grid>
            <Grid container item xs={3} className="logos">
              <Grid container item justify="center" alignItems="center" className="small-logo">
                <img onClick={() => window.open("https://lsusports.net/sports/football", "_blank")} src={LSULogo} alt="LSU Logo" />
                <p style={{ marginBottom: "-12px" }}>lsu.football</p>
              </Grid>
            </Grid>
            <Grid container item xs={3} className="logos">
              <Grid container item justify="center" alignItems="center" className="small-logo">
                <img onClick={() => window.open("https://ohiostatebuckeyes.com/sports/m-footbl/", "_blank")} src={OhioStaeLogo} alt="OhioState Logo" />
                <p>coachgundy.com</p>
              </Grid>
            </Grid>
            <Grid container item xs={3} className="logos">
              <Grid container item justify="center" alignItems="center" className="big-logo">
                <img onClick={() => window.open("https://scarletknights.com/sports/football", "_blank")} src={RutgersLogo} alt="Rutgers Logo" />
                <p>daboswinney.com</p>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Porgrams;
