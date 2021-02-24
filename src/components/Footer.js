import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic">
        <div className="container">
          <p className="rights">
            <span>©  </span>
            <span className="copyright-year" />
            <span> </span>
            <span>Defiant</span>
            <span>. </span>
            <span>All Rights Reserved</span>
            <span>. </span>
            <a href="privacy-policy.html">Privacy Policy</a>
            <span>.</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
