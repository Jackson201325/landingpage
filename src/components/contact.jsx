import React from "react";
import { Mixpanel } from '../mixpanel';
import { useForm } from "react-hook-form";
import Divider from '@material-ui/core/Divider'
import { Grid, Typography } from "@material-ui/core";


const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  Mixpanel.track_forms('#contact-form', 'Email Sent');

  const onSubmit = data => {
    Mixpanel.people.set({
      "$email": data.email,
    });

    Mixpanel.register({
      "message": data.message
    });
  }

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                </p>
                </div>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          ref={register({
                            required: "required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address"
                            }
                          })}
                        />
                        {errors.email?.type === "required" && <span className="help-block text-danger" role="alert">Your input is required</span>}
                        {errors.email?.type === "pattern" && <span className="help-block text-danger" role="alert">{errors.email.message}</span>}
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
                      ref={register({
                        required: "required",
                      })}
                    ></textarea>
                    {errors.email?.type === "required" && <span className="help-block text-danger" role="alert"></span>}
                  </div>
                  <input type="submit" className="btn btn-custom btn-lg" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
          <Divider style={{ height: '2px', backgroundColor: 'white', width: '100%', marginBottom: '30px' }} />
          <Grid container item justify="center" align-item="center" >
            <Typography variant="body2" component="p" style={{ fontSize: "14px", color: "white" }}>
              recruiting@officialvisit.com
            </Typography>
          </Grid>
          <Grid container item justify="center" align-item="center" >
            <Typography variant="body2" component="p" style={{ fontSize: "14px", color: "white" }} s>
              +1 215 234 1121
            </Typography>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Contact;
