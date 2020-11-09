import React, { Component } from "react";
import { Grid, Card } from "@material-ui/core";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title" style={{ marginBottom: "-70px" }}>
            <h2>Who we are</h2>
            <p>
              We are college football, marketing, and technical experts who want to help you tubocharge your
              recruiting and branding efforts
            </p>
          </div>
          <Grid container item>
            {this.props.data
              ? this.props.data.map((d, i) => (
                <Grid key={`${d.name}-${i}`} item container md={6} justify="space-evenly" alignItems="center">
                  <div className="card">
                    <img src={d.img} alt="..." className="team-img" />
                    <Card style={{ margin: "1px", minHeight: "340px" }} >
                      <div className="caption">
                        <h4 style={{ color: "#005587" }}>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </Card>
                  </div>
                </Grid>
              ))
              : "loading"}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Team;
