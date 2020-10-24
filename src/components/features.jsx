import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Your recruiting funnel is <em style={{color:"#0F9FD6"}}>leaking</em><br/> We will help you <em style={{color:"#0F9FD6"}}>plug the leak</em></h2>
            <p>
              According to a 2020 HubSpot survey, the majority of people prefer to engage with and learn more about a brand <strong style={{color:"#0F9FD6", fontStyle: "Italic"}}>by going to their website </strong>.
              <br/> 
              With the right content and freshness, a recruiting website can play a critical role while nurturing your prized recruits and their guardians through their decision-making process.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
