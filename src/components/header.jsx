import React, { Component } from "react";
import { Grid, Hidden } from "@material-ui/core";
import { HEADER } from '../data/constant'
import intro from '../static/images/intro.svg'

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="container">
            <div className="row">
              <Grid container className="content-wrapper">
                <Hidden xsDown>
                  <Grid container item md={6}>
                    <div className="col-md-12 intro-text">
                      <h1 className="title">
                        {HEADER.title}
                      </h1>
                      <p className="content">
                        {this.props.data ? HEADER.content : "Loading"}
                      </p>
                    </div>
                  </Grid>
                  <Grid container item xs={6}>
                    <img src={intro} className="desktop-img" alt='intro' />
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <div className="col-md-10 col-md-offset-1 intro-text mobile">
                    <h1 className="mobile-title">
                      {HEADER.title}

                    </h1>
                    <p className="mobile-content">
                      {this.props.data ? this.props.data.paragraph : "Loading"}
                    </p>
                  </div>
                  <div className='mobile-image-container'>
                    <img className="mobile-img" src={intro} alt='intro' />
                  </div>
                </Hidden>
              </Grid>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;