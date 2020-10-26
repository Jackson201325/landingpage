import React, { Component } from "react";
import { Grid } from "@material-ui/core";
export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <Grid container>
            <Grid container item xs={4} className="leakage">
              <div className="col-md-10 col-md-offset-1 section-title" style={{ marginBottom: "0px", marginTop: '33%' }}>
                <h2 style={{ marginBottom: "50px" }}>Your recruiting funnel is <em style={{ color: "#0F9FD6" }}>leaking</em></h2>
                <p>
                  Parts of the recruiting funnel are well understood
                  <ul>
                    <br />
                    <li>Identify player</li>
                    <li>Follow on twitter</li>
                    <li>Nurture with texts & tweets</li>
                    <li>Close with home & campus visits</li>
                  </ul>
                  <br />
                  But how do you warm them up before you make contact?
                </p>
                <p>
                  How do you keep them and their parents engaged between the texts and campus visits
                </p>
              </div>
            </Grid>
            <Grid container item xs={8}>
              <img src={require("../static/images/Funnel13x.png")}></img>
            </Grid>
          </Grid>
          <Grid container>
            <Grid container item xs={4} className="leakage">
              <div className="col-md-10 col-md-offset-1 section-title" style={{ marginBottom: "0px", marginTop: '33%' }}>
                <h2 style={{ marginBottom: "50px" }}>We will help you <em style={{ color: "#0F9FD6" }}>plug the leak.</em></h2>
                <p>
                  According to a 2020 HubSpot survey, the majority of people prefer to engage with and learn more about a brand by going to their website.
                </p>
                <p>
                  With the right content and freshness, a recruiting website can play a critical role while nurturing your prized recruits and their guardians through their decision-making process.
                </p>
              </div>
            </Grid>
            <Grid container item xs={8}>
              <img src={require("../static/images/Funnel23x.png")}></img>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default features;