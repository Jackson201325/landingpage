import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { FEATURE_ONE, FEATURE_TWO } from "../data/constant"
import Fade from 'react-reveal/Fade';
import funnel1 from '../static/images/funnel1.svg'
import funnel2 from '../static/images/funnel2.svg'

const features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <Grid container style={{ marginBottom: '3em' }}>
          <Grid container item className="title-wrapper" xs={12}>
            <div className="col-md-6 col-lg-4 section-title title">
              <h2>{FEATURE_ONE.title1}<em>leaking</em></h2>
            </div>
          </Grid>
          <Grid container item md={5} lg={6} className="leakage section-title content-wrapper">
            <Fade top cascade>
              <div className="content">
                <Typography variant="body2" style={{ marginBottom: '30px' }} component="p">
                  {FEATURE_ONE.content1}
                </Typography>
                <Typography variant="body2" component="p">
                  {FEATURE_ONE.content2}
                  <br />
                  {FEATURE_ONE.content3}
                </Typography>
              </div>
            </Fade>
          </Grid>
          <Grid container item md={6} lg={6} >
            <div className="mobile-image-container">
              <img src={funnel1} alt="funnel1" className="img-one"></img>
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: '3em' }}>
          <Grid container item className="title-wrapper" xs={12}>
            <div className="col-md-6 section-title title line">
              <h2>{FEATURE_TWO.title} <br /><em>plug the leak.</em></h2>
            </div>
          </Grid>
          <Grid container item md={5} lg={6} className="leakage section-title content-wrapper">
            <Fade top cascade>
              <div className="content">
                <Typography variant="body2" component="p">
                  {FEATURE_TWO.content1}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  {FEATURE_TWO.content2}
                </Typography>
              </div>
            </Fade>
          </Grid>
          <Grid container item md={6} lg={6} >
            <div className="mobile-image-container">
              <img src={funnel2} alt="funnel1" className="img-two"></img>
            </div>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}

export default features;