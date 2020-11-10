import React from 'react'
import Slider from 'react-elastic-carousel'
import { Hidden, Grid } from "@material-ui/core";
import { ABOUT } from '../data/constant'

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="section-title" >
          <h2>{ABOUT.title}</h2>
        </div>
        <div className="row">
          <Hidden xsDown>
            <Slider >
              <Grid container className="slide">
                <Grid item container direction="column" xs={5}>
                  <h3 >{ABOUT.slide1.title}</h3>
                  <p className="about-text">
                    {ABOUT.slide1.content2.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                </Grid>
                <Grid item container xs={7}>
                  <div className="mobile-image-container">
                    <img src={require('../static/images/howitworks_two.png')} alt="two"></img>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="slide">
                <Grid item container direction="column" xs={4}>
                  <h3 >{ABOUT.slide2.title}</h3>
                  <p>{ABOUT.slide2.content1}</p>
                </Grid>
                <Grid item container xs={8}>
                  <div className="mobile-image-container">
                    <img src={require('../static/images/howitworks_three.png')} alt="three"></img>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="slide">
                <Grid item container direction="column" xs={4}>
                  <h3 >{ABOUT.slide3.title}</h3>
                  <p>{ABOUT.slide3.content1}</p>
                  <p>{ABOUT.slide3.content2}</p>
                </Grid>
                <Grid item container xs={8} className="layout">
                  <div className="mobile-image-container">
                    <img src={require('../static/images/howitworks_four.png')} alt="four"></img>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="slide">
                <Grid item container direction="column" xs={4}>
                  <h3 >{ABOUT.slide4.title}</h3>
                  <p>{ABOUT.slide4.content1}</p>
                  <p>{ABOUT.slide4.content2}</p>
                </Grid>
                <Grid item container xs={8} className="layout" justify="flex-end">
                  <div className="mobile-image-container">
                    <img src={require('../static/images/howitworks_one.svg')} alt="one"></img>
                  </div>
                </Grid>
              </Grid>
            </Slider>
          </Hidden>
          <Hidden smUp>
            <Slider>
              <Grid container className="slide">
                <Grid item container>
                  <h3 >{ABOUT.slide1.title}</h3>
                  <p className="about-text">
                    {ABOUT.slide1.content2.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                </Grid>
              </Grid>
              <Grid container className="slide">
                <Grid item container>
                  <h3 >{ABOUT.slide2.title}</h3>
                  <p>{ABOUT.slide2.content1}</p>
                </Grid>
                <Grid item container>
                  <div className="mobile-image-container">
                    <img alt='three' src={require('../static/images/howitworks_three.png')}></img>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="slide">
                <Grid item container>
                  <h3 >{ABOUT.slide3.title}</h3>
                  <p>{ABOUT.slide3.content1}</p>
                  <p>{ABOUT.slide3.content2}</p>
                </Grid>
                <Grid item container>
                  <div className="mobile-image-container">
                    <img alt='four' src={require('../static/images/howitworks_four.png')}></img>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="slide">
                <Grid item container>
                  <h3 >{ABOUT.slide4.title}</h3>
                  <p>{ABOUT.slide4.content1}</p>
                  <p>{ABOUT.slide4.content2}</p>
                </Grid>
                <Grid item container>
                  <div className="mobile-image-container">
                    <img alt='four' src={require('../static/images/howitworks_one.svg')}></img>
                  </div>
                </Grid>
              </Grid>
            </Slider>
          </Hidden>
        </div>
      </div>
    </div >
  )
}
export default About