import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <section
        className="section section-xl text-center bg-default"
        id="contacts"
      >
        <div className="container">
          <h2>
            Contact<span className="text-primary"> Us</span>
          </h2>
          <div className="row box-decor box-decor-custom row-30 justify-content-center">
            <div
              className="box-decor-image box-decor-image-05 custom-bg-image"
              data-parallax-scroll="{'y': 120,  'smoothness': 30}"
            />
            <div className="col-md-6">
              <div className="box-form-custom">
                {}
                <form
                  className="rd-mailform text-left"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      className="form-input"
                      id="contact-name"
                      type="text"
                      name="name"
                      data-constraints="@Required"
                    />
                  </div>
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-email">
                      E-Mail
                    </label>
                    <input
                      className="form-input"
                      id="contact-email"
                      type="email"
                      name="email"
                      data-constraints="@Required @Email"
                    />
                  </div>
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      className="form-input"
                      id="contact-message"
                      name="message"
                      data-constraints="@Required"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-button group-sm text-center text-lg-left">
                    <button className="button button-primary" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-compress-lg">
                <ul className="list-address">
                  <li>
                    <div className="unit unit-horizontal unit-spacing-xl flex-column flex-sm-row">
                      <div className="unit-left">
                        <span className="icon icon-primary icon-xl thin-icon-map-marker" />
                      </div>
                      <div className="unit-body">
                        <dl>
                          <dt>Visit our Office:</dt>
                          <dd>
                            <a href="#">
                              45 West Riverview St.
                              <br />
                              Oakland, CA 94603
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-horizontal unit-spacing-xl flex-column flex-sm-row">
                      <div className="unit-left">
                        <span className="icon icon-primary icon-xl thin-icon-email-open" />
                      </div>
                      <div className="unit-body">
                        <dl>
                          <dt>E-mail:</dt>
                          <dd>
                            <a href="mailto:#">mail@demolink.org</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-horizontal unit-spacing-xl flex-column flex-sm-row">
                      <div className="unit-left">
                        <span className="icon icon-primary icon-xl thin-icon-phone-support" />
                      </div>
                      <div className="unit-body">
                        <dl>
                          <dt>Call Us:</dt>
                          <dd>
                            <a href="tel:#">(719) 445-2808;</a>
                            <a href="tel:#"> (719) 445-2809</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list-social list-inline list-classic">
                  <li>
                    <a
                      className="icon icon-lg icon-custom-circle fa fa-linkedin"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-lg icon-custom-circle fa fa-twitter"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-lg icon-custom-circle fa fa-facebook"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-lg icon-custom-circle fa fa-instagram"
                      href="#"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
