import React from 'react'
import Slider, { consts } from 'react-elastic-carousel'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Button, CardMedia, Grid } from "@material-ui/core";

const About = () => {

  const useStyles = makeStyles(theme => ({
    card: {
      border: '1px solid black',
      display: 'flex',
      width: '150%',
      height: 'auto',
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
      backgroundPosition: 'left'
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
          <div className={classes.slider}>
            <Slider renderArrow={myArrows}>
              <Grid container className={classes.slide} spacing={3}>
                <Grid item container direction="column" xs={7}>
                  <h3 style={{ marginBottom: '-10px' }}>Choose your custom features</h3>
                  <p style={{ marginBottom: '-10px' }}>Choose from our core feature set to best tell your story:</p>
                  <p className="about-text">
                    <li>Program Pillar</li>
                    <li>Coach Profiles</li>
                    <li>Alumni</li>
                    <li>Teammates</li>
                    <li>Facilities</li>
                    <li>Academics</li>
                    <li>Tradition</li>
                    <li>Football Camps</li>
                  </p>
                </Grid>
                <Grid item container style={{ marginLeft: '-50px' }} xs={5}>
                  <div>
                    <Card className={classes.card}>
                      <Grid container direction="column" item>
                        <Grid container padding={3} >
                          <Grid container item xs={5}>
                            <img src={require("../static/images/Nick_Saban.png")} />
                          </Grid>
                          <Grid container item direction="column" style={{ paddingLeft: '30px' }} xs={7}>
                            <div className="coach-name">
                              <h4>Nick Saban</h4>
                              <p>Head Coach</p>
                            </div>
                            <div className="coach-info">
                              <p>Nick Saban has been the premier head coach in college football since winning his first championship at LSU in 2003. After a brief stint in the NFL, Saban has become the standard to which all coaches are compared to.</p>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: '15px' }} spacing={1}>
                          <Grid container direction="column" item xs={8}>
                            <Card>
                              <Grid container >
                                <Grid xs={4} container item className="commenter" alignItems="center" direction="column">
                                  <Grid item>
                                    <div className="comment-name">
                                      <span style={{ fontSize: '8px' }}>Aj McCarron</span>
                                    </div>
                                    <img src={require("../static/images/Nick_Saban.png")} />
                                    <span>Alabama Alumni <br /></span>
                                    <span>Communications major</span>
                                    <hr
                                      style={{
                                        color: 'black',
                                        backgroundColor: 'black',
                                        height: 1,
                                        margin: '3px 0px 3px 0px'
                                      }}
                                    />
                                    <span>Football - Quarterback</span>
                                  </Grid>
                                </Grid>
                                <Grid item container xs={8} className="comment" direction="column">
                                  <Grid item container>
                                    <Grid item xs={6}>
                                      <span style={{ color: "#005587" }}>5.0{' '}</span>
                                      <i class="material-icons">circle</i>
                                      <i class="material-icons">circle</i>
                                      <i class="material-icons">circle</i>
                                      <i class="material-icons">circle</i>
                                      <i class="material-icons">circle</i>
                                    </Grid>
                                    <Grid item xs={6} container alignItems="center" justify="flex-end">
                                      <span style={{ fontSize: "6px" }}>Reviewed Yesterday</span>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <p style={{ marginBottom: '8px' }}>Simply the best.</p>
                                    <span class="quote">“There is nobody better. Period.”{' '}</span>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Card>
                          </Grid>
                          <Grid container item direction="column" xs={4}>
                            <Card>
                              <Grid container >
                                <Grid xs={4} container item className="commenter" alignItems="center" direction="column">
                                  <Grid item>
                                    <div className="comment-name">
                                      <span style={{ fontSize: '8px' }}>Aj McCarron</span>
                                    </div>
                                    <img src={require("../static/images/Nick_Saban.png")} />
                                    <span>Alabama Alumni <br /></span>
                                    <span>Communications major</span>
                                    <hr
                                      style={{
                                        color: 'black',
                                        backgroundColor: 'black',
                                        height: 1,
                                        margin: '3px 0px 3px 0px'
                                      }}
                                    />
                                    <span>Football - Quarterback</span>
                                  </Grid>
                                </Grid>
                                <Grid item container xs={8} className="comment" direction="column">
                                </Grid>
                              </Grid>
                            </Card>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </div>
                </Grid>
              </Grid>

              <Grid container className={classes.slide}>
                <Grid item container direction="column" xs={4}>
                  <h3 style={{ marginBottom: '-10px' }}>Select Your Layout</h3>
                  <p>We have assembled a portfolio of best-in-class templates that make it fast an easy for you to have professional presentation</p>
                </Grid>
                <Grid item container xs={2}></Grid>
                <Grid item container xs={6} className="layout">
                  <Card style={{ width: "100%", height: "99%", border: '1px solid black' }} >
                    <CardMedia
                      className={classes.media}
                      image={require('../static/images/hompage_screenshot.png')}
                      title="Paella dish"
                    />
                  </Card>
                </Grid>
              </Grid>
              <Grid container className={classes.slide}>
                <Grid item container direction="column" xs={4}>
                  <h3 style={{ marginBottom: '-10px' }}>Share your content</h3>
                  <p style={{ marginBottom: '-10px' }}>Images, videos, program branding...</p>
                  <p style={{ marginBottom: '-10px' }}>You already have great content team. We will partner with them to make sure it is being presented to you prized recruits in an effective and intuitive manner.</p>
                </Grid>
                <Grid item container xs={2}></Grid>
                <Grid item container xs={6} className="layout">
                  <Card style={{ width: "100%", height: "99%", border: '1px solid black' }} >
                    <CardMedia
                      className={classes.media}
                      image={require('../static/images/Locations Page Screenshot@3x.png')}
                      title="Paella dish"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Slider>
          </div>
        </div>
      </div>
    </div >
  )
}
export default About