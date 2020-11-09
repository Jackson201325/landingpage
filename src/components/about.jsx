import React from 'react'
import Slider, { consts } from 'react-elastic-carousel'
import { Button, Hidden, Grid } from "@material-ui/core";
import { ABOUT } from '../data/constant'

const About = () => {
  const myArrows = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '←' : '→'
    return (
      <Button disableRipple className="arrows" onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    )
  }
  return (
    <div id="about">
      <div className="container">
        <div className="section-title" >
          <h2>{ABOUT.title}</h2>
        </div>
        <div className="row">
          <Hidden xsDown>
            <div className="slider">
              <Slider renderArrow={myArrows}>
                <Grid container className="slide">
                  <Grid item container direction="column" xs={5}>
                    <h3 >{ABOUT.slide1.title}</h3>
                    <p >{ABOUT.slide1.content1}</p>
                    <p className="about-text">
                      {ABOUT.slide1.content2.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </p>
                  </Grid>
                  <Grid item container xs={7}>
                    <div style={{ height: 'auto' }}>
                      <img src={require('../static/images/howitworks_two.png')} alt="two"></img>
                    </div>
                  </Grid>
                </Grid>
                <Grid container className="slide">
                  <Grid item container direction="column" xs={4}>
                    <h3 >Select your layout</h3>
                    <p>We have assembled a portfolio of best-in-class templates that make it fast an easy for you to have professional presentation.</p>
                  </Grid>
                  <Grid item container xs={8}>
                    <div style={{ height: 'auto' }}>
                      <img src={require('../static/images/howitworks_three.png')} alt="three"></img>
                    </div>
                  </Grid>
                </Grid>
                <Grid container className="slide">
                  <Grid item container direction="column" xs={4}>
                    <h3 >Share your content</h3>
                    <p >Images, videos, program branding...</p>
                    <p >You already have a great content team. We will partner with them to make sure it is being presented to your prized recruits in an effective and intuitive manner.</p>
                  </Grid>
                  <Grid item container xs={8} className="layout">
                    <div style={{ height: 'auto' }}>
                      <img src={require('../static/images/howitworks_four.png')} alt="four"></img>
                    </div>
                  </Grid>
                </Grid>
              </Slider>
            </div>
          </Hidden>
          <Hidden smUp>
            <div className="slider">
              <Slider renderArrow={myArrows}>

                <Grid container className="slide">
                  <Grid item container>
                    <h3 >Choose your custom features</h3>
                    <p >Choose from our core feature set to best tell your story:</p>
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
                </Grid>

                <Grid container direction="column" className="slide">
                  <Grid item container>
                    <h3 >Select your layout</h3>
                    <p>We have assembled a portfolio of best-in-class templates that make it fast an easy for you to have professional presentation.</p>
                  </Grid>
                  <Grid item container>
                    <div style={{ height: 'auto' }}>
                      <img style={{ width: "100%", margin: "0px" }} alt='three' src={require('../static/images/howitworks_three.png')}></img>
                    </div>
                  </Grid>
                </Grid>
                <Grid container className="slide">
                  <Grid item container>
                    <h3 >Share your content</h3>
                    <p >Images, videos, program branding...</p>
                    <p>You already have a great content team. We will partner with them to make sure it is being presented to your prized recruits in an effective and intuitive manner.</p>
                  </Grid>
                  <Grid item container>
                    <div style={{ height: 'auto' }}>
                      <img style={{ width: "100%", margin: "0px" }} alt='four' src={require('../static/images/howitworks_four.png')}></img>
                    </div>
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