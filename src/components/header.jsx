import React, { Component } from "react";
import { Grid, Hidden } from "@material-ui/core";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <Grid container>
                  <Hidden xsDown>
                    <Grid container item md={6}>
                      <div className="col-md-10 col-md-offset-1 intro-text">
                        <h1 style={{ width: "70%", marginBottom: "36px" }}>
                          Designing cutting-edge
    <strong> recruiting experiences </strong>
    for college <strong> football
    programs</strong>
                        </h1>
                        <p style={{ width: "70%", margin: "initial" }}>
                          {this.props.data ? this.props.data.paragraph : "Loading"}
                        </p>
                      </div>
                    </Grid>
                    <Grid container item xs={5} className="picture">
                    </Grid>
                  </Hidden>
                  <Hidden smUp>
                    <div className="col-md-10 col-md-offset-1 intro-text" style={{ padding: "80px 20px 0px 20px" }}>
                      <h1 style={{ marginBottom: "36px", fontSize: "40px" }}>
                        Designing cutting-edge
  <strong> recruiting experiences </strong>
  for college <strong> football
  programs</strong>
                      </h1>
                      <p style={{ width: "65%", margin: "initial", position: 'absolute' }}>
                        {this.props.data ? this.props.data.paragraph : "Loading"}
                      </p>
                    </div>
                    <img style={{ marginTop: "140px", width: "100%" }} src={require('../static/images/intro.png')}></img>
                  </Hidden>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;