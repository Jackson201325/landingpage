import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="programs" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Top Programs finding ways to connect</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`} 
                    className="col-md-4"
                    style={{cursor: "pointer"}}
                  >
                  <a target="_blank"
                    href={d.name}>
                    <i className={d.icon}></i>
                  </a>
                    <div className="service-desc">
                      <h3>{d.text}</h3>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
