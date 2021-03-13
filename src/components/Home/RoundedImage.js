import React from "react";

import i from "../../assets/images/img-rounded-01-667x615.png";

class RoundedImage extends React.Component {
  render() {
    return (
      <section
        className="section section-xl bg-default section-decoration-1"
        id="about"
      >
        <div className="box-rounded-custom">
          <div className="container">
            <div className="row row-30 justify-content-md-center align-items-lg-center">
              <div className="col-md-9 col-lg-6">
                <div
                  className="box-rounded-custom-image"
                  data-parallax-scroll="{'y': 60,  'smoothness': 30}"
                >
                  <img src={i} alt width={667} height={615} />
                  <div
                    className="box-decor-image box-decor-image-01 custom-bg-image"
                    data-parallax-scroll="{'y': 120,  'smoothness': 30}"
                  />
                </div>
              </div>
              <div className="col-md-9 col-lg-6">
                <h2>
                  <span className="text-primary"> Why</span> Freelancer
                  Conference?
                </h2>
                <p className="big">
                  Our conference combines shared vision with the reality of
                  self-employment dream coming true.
                </p>
                <p>
                  Now that freelancing is a more accepted form of the business
                  model, we want to find and solve the roadblocks that are
                  holding freelancers back. We are reaching out to not only
                  legitimize the industry of freelancing but bring us together
                  as a community to learn from each other to benefit everyone
                  that participates in freelancing. Join our conference and
                  share your knowledge!
                </p>
                <a className="button button-primary" href="#">
                  Register now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RoundedImage;
