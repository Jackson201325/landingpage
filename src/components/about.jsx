import React from 'react'
import Slider, { consts } from 'react-elastic-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Hidden, Grid } from "@material-ui/core";

const About = () => {

  const useStyles = makeStyles(theme => ({
    card: {
      margin: '1px',
      padding: '20px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    media: {
      height: '100%',
      backgroundPosition: 'inherit'
    },
    domain: {
      color: 'black',
      fontSize: '60px',
      fontWeight: 'bold'
    }
  }));

  const myArrows = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '←' : '→'
    return (
      <Button disableRipple style={{ fontSize: "54px", alignSelf: "flex-end", position: "relative", bottom: "-20%" }} onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    )
  }
  const classes = useStyles();
  return (
    <div id="about">
      <div className="container">
        <div className="section-title" >
          <h2>How it Works</h2>
        </div>
        <div className="row">
          <Hidden xsDown>
            <div className={classes.slider}>
              <Slider renderArrow={myArrows}>
                <Grid container className={classes.slide}>
                  <Grid item container xs={12} spacing={4}>
                    <Grid item container justify="flex-end" alignItems="center" xs={6}>
                      <img style={{ height: "fit-content", width: "fit-content" }} src={require("../static/images/domain.png")} />
                    </Grid>
                    <Grid item container justify="flex-start" alignItems="center" xs={6}>
                      <h1 className={classes.domain}>Claim a <br />domain</h1>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.slide}>
                  <Grid item container direction="column" xs={5}>
                    <h3 style={{ marginBottom: '-10px' }}>Choose your custom features</h3>
                    <p style={{ marginBottom: '-10px' }}>Choose from our core feature set to best tell your story:</p>
                    <p className="about-text">
                      <li>Program Pillars</li>
                      <li>Coach Profiles</li>
                      <li>Alumni</li>
                      <li>Teammates</li>
                      <li>Facilities</li>
                      <li>Academics</li>
                      <li>Tradition</li>
                      <li>Football Camps</li>
                    </p>
                  </Grid>
                  <Grid item container xs={7}>
                    <img style={{ width: "100%" }} src={require('../static/images/howitworks_two.png')}></img>
                  </Grid>
                </Grid>
                <Grid container className={classes.slide}>
                  <Grid item container direction="column" xs={4}>
                    <h3 style={{ marginBottom: '-10px' }}>Select Your Layout</h3>
                    <p>We have assembled a portfolio of best-in-class templates that make it fast an easy for you to have professional presentation.</p>
                  </Grid>
                  <Grid item container xs={8}>
                    <img style={{ width: "100%" }} src={require('../static/images/howitworks_three.png')}></img>
                  </Grid>
                </Grid>
                <Grid container className={classes.slide}>
                  <Grid item container direction="column" xs={4}>
                    <h3 style={{ marginBottom: '-10px' }}>Share your content</h3>
                    <p style={{ marginBottom: '-10px' }}>Images, videos, program branding...</p>
                    <p style={{ marginBottom: '-10px' }}>You already have great content team. We will partner with them to make sure it is being presented to your prized recruits in an effective and intuitive manner.</p>
                  </Grid>
                  <Grid item container xs={8} className="layout">
                    <img style={{ width: "100%" }} src={require('../static/images/howitworks_four.png')}></img>
                  </Grid>
                </Grid>
              </Slider>
            </div>
          </Hidden>
          <Hidden smUp>
            <div className={classes.slider}>
              <Slider renderArrow={myArrows}>
                <Grid container className={classes.slide}>
                  <Grid item container xs={12} spacing={4}>
                    <Grid item container justify="flex-end" alignItems="center" xs={6}>
                      <img style={{ width: "80%" }} src={require("../static/images/domain.png")} />
                    </Grid>
                    <Grid item container justify="flex-start" alignItems="center" xs={6}>
                      <h1 className={classes.domain} style={{ fontSize: "30px" }}>Claim a <br />domain</h1>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.slide}>
                  <Grid item container>
                    <h3 style={{ marginBottom: '-10px' }}>Choose your custom features</h3>
                    <p style={{ marginBottom: '-10px' }}>Choose from our core feature set to best tell your story:</p>
                  </Grid>
                  <Grid item container>
                    <img style={{ width: "100%" }} src={require('../static/images/howitworks_two.png')}></img>
                  </Grid>
                </Grid>

                <Grid container className={classes.slide}>
                  <Grid item container style={{ height: "" }}>
                    <h3 style={{ marginBottom: '-10px' }}>Select Your Layout</h3>
                    <p>We have assembled a portfolio of best-in-class templates that make it fast an easy for you to have professional presentation.</p>
                  </Grid>
                  <Grid item container>
                    <img style={{ width: "100%" }} src={require('../static/images/howitworks_three.png')}></img>
                  </Grid>
                </Grid>

                <Grid container className={classes.slide}>
                  <Grid item container>
                    <h3 style={{ marginBottom: '-10px' }}>Share your content</h3>
                    <p style={{ marginBottom: '-10px' }}>Images, videos, program branding...</p>
                    <p style={{ marginBottom: '-10px' }}>You already have great content team. We will partner with them to make sure it is being presented to your prized recruits in an effective and intuitive manner.</p>
                  </Grid>
                  <Grid item container className="layout">
                    <img style={{ width: "100%" }} src={require('../static/images/howitworks_four.png')}></img>
                  </Grid>
                </Grid>
              </Slider>
            </div>
          </Hidden>
        </div>
      </div>
    </div >
  )
}
export default About