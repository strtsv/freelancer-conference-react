import React from "react";
import $ from "jquery";

import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/jquery.ui.totop.my.js";
import "../assets/js/parallax.js";

import i1 from "../assets/images/logo-default-161x49.png";
import i2 from "../assets/images/logo-inverse-260x42.png";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap rd-navbar-absolute">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i1}
                        alt
                        width={161}
                        height={49}
                        srcSet="images/logo-default-350x107.png 2x"
                      />
                      <img
                        className="brand-logo-light"
                        src={i2}
                        alt
                        width={260}
                        height={42}
                        srcSet="images/logo-inverse-520x84.png 2x"
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    {}
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#about">
                          About
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#gallery">
                          Gallery
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#speakers">
                          Speakers
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#schedule">
                          Schedule
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#pricing">
                          Pricing
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#partners">
                          Partners
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#contacts">
                          Contacts
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Pages
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="typography.html"
                            >
                              Typography
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="buttons.html">
                              Buttons
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="forms.html">
                              Forms
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="tabs-and-accordions.html"
                            >
                              Tabs and Accordions
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="progress-bars.html"
                            >
                              Progress Bars
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="tables.html">
                              Tables
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="privacy-policy.html"
                            >
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
