import React, { Component } from "react";
import { Grid } from "@material-ui/core";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <Grid container>
                  <Grid container item md={5}>
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <h1>
                        {this.props.data ? this.props.data.title : "Loading"}
                        <span></span>
                      </h1>
                      <p>
                        {this.props.data ? this.props.data.paragraph : "Loading"}
                      </p>
                      <a
                        href="#features"
                        className="btn btn-custom btn-lg page-scroll"
                      >
                        Brand It
                      </a>
                    </div>
                  </Grid>
                  <Grid container item md={7} className="picture">

                  </Grid>
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
