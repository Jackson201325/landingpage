import React, { Component } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { FEATURE_ONE, FEATURE_TWO } from "../data/constant"
import Fade from 'react-reveal/Fade';
export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <Grid container>
            <Grid container item xs={12}>
              <div className="col-md-6 col-md-offset-3 section-title title">
                <h2>{FEATURE_ONE.title1}<em>leaking</em></h2>
              </div>
            </Grid>
            <Grid container item md={5} className="leakage section-title content">
              <div>
                <Card className="info-card">
                  <CardContent>
                    <Fade top cascade>
                      <Typography variant="body2" component="p">
                        {FEATURE_ONE.content1}
                      </Typography>
                      <ul>
                        <br />
                        {FEATURE_ONE.content2.map((parts => {
                          return <li key={parts} style={{ fontSize: '18px' }}>{parts}</li>
                        }))}
                      </ul>
                      <Typography variant="body2" component="p">
                        {FEATURE_ONE.content3}
                      </Typography>
                      <br />
                      <Typography variant="body2" component="p">
                        {FEATURE_ONE.content4}
                      </Typography>
                    </Fade>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid container item md={7}>
              <div style={{ height: 'auto' }}>
                <img src={require("../static/images/Funnel13x.png")} alt="funnel1"></img>
              </div>
            </Grid>
          </Grid>
          <Grid container className="">
            <Grid container item xs={12}>
              <div className="col-md-6 col-md-offset-3 section-title title">
                <h2>{FEATURE_TWO.title}<em>plug the leak.</em></h2>
              </div>
            </Grid>
            <Grid container item md={5} className="leakage section-title content">
              <div>
                <Card className="info-card">
                  <CardContent>
                    <Fade top cascade>
                      <Typography variant="body2" component="p">
                        {FEATURE_TWO.content1}
                      </Typography>
                      <br />
                      <Typography variant="body2" component="p">
                        {FEATURE_TWO.content2}
                      </Typography>
                    </Fade>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid container item md={7}>
              <div style={{ height: 'auto' }}>
                <img src={require("../static/images/Funnel23x.png")} alt="funnel2"></img>
              </div>
            </Grid>
          </Grid>
        </div>
      </div >
    );
  }
}

export default features;