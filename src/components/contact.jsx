import React, { useState } from "react";

const Contact = () => {
  var mixpanel = require('mixpanel-browser');

  mixpanel.init("94f3f165dfcca6795388f8820835b318");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    console.log({
      email: email,
      message: message
    })
    return {
      email: email,
      message: message
    }
  }
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we
                  will get back to you as soon as possible.
              </p>
              </div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        placeholder="colleges@ovlabs.io"
                        className="form-control"
                        required="required"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" onClick={() => sendMessage()} className="btn btn-custom btn-lg">
                  Send Message
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
