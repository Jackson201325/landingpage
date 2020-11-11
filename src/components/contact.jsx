import React from "react";
import { Mixpanel } from '../mixpanel';
import { useForm } from "react-hook-form";
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
    // fetch('https://crm.zoho.com/crm/WebToLeadForm', {
    //   method: 'POST',
    //   body: data,
    //   mode: 'no-cors',
    // })

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
              <form id="contact-form" action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads4628734000000390052' method='POST' onSubmit={handleSubmit(onSubmit)} acceptCharset='UTF-8'>
                {/* <form id="contact-form" onSubmit={handleSubmit(onSubmit)}> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="Company"
                        name="School"
                        placeholder="School"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="Last_Name"
                        name="Name"
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="Mobile"
                        name="Mobile"
                        placeholder="Mobile"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        ftype='email'
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
                    name="Message"
                    id="Description"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    ref={register({
                      required: "required",
                    })}
                  ></textarea>
                  {errors.email?.type === "required" && <span className="help-block text-danger" role="alert"></span>}
                </div>
                <input type='text' style={{ display: "none" }} name='xnQsjsdp' value='ea5b8f1ad0b0d03da87b7c086f6c8e2fa3368f20ed123909bfe0f93fe93a95a3'></input>
                <input type='hidden' name='Lead_Source' id='Lead_Source' value='Site'></input>
                <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
                <input type='text' style={{ display: "none" }} name='xmIwtLD' value='048e5e03dff544754032d3b11db12442f434a4dbe0132f200a20ef4a768df7b7'></input>
                <input type='text' style={{ display: "none" }} name='actionType' value='TGVhZHM='></input>
                <input type='text' style={{ display: "none" }} name='returnURL' value='https://officialvisit.com'></input>
                <input type="submit" className="btn btn-custom btn-lg" value="Send Message" />
                <script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=048e5e03dff544754032d3b11db12442f434a4dbe0132f200a20ef4a768df7b7gidea5b8f1ad0b0d03da87b7c086f6c8e2fa3368f20ed123909bfe0f93fe93a95a3gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513'></script>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;