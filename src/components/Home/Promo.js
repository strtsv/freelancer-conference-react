import React from "react";

import i1 from "../../assets/images/bg-custom-01.png";
import i2 from "../../assets/images/decor-element-01-907x824.png";

class Promo extends React.Component {
  render() {
    return (
      <section className="section section-promo context-dark" id="home">
        <div className="section-promo-item">
          <img src={i1} alt />
        </div>
        <div className="section-promo-decor">
          <img src={i2} alt width={907} height={824} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10">
              <div className="box-size-custom">
                <h3
                  className="text-secondary-1 wow fadeInUpSmall"
                  data-wow-delay=".7s"
                >
                  April 23, 2018
                </h3>
                <h1 className="wow fadeInSmall" data-wow-delay=".4s">
                  Freelancer <span className="big">Conference</span>
                </h1>
                <div
                  className="block-promo wow fadeInDownSmall"
                  data-wow-delay=".7s"
                >
                  <div className="block-promo-left">
                    <time>2018</time>
                  </div>
                  <div className="block-promo-body">
                    <p className="text-gray-50 big">
                      Welcome to one of the biggest events organized by
                      freelancers for freelancers.
                    </p>
                  </div>
                </div>
                <div
                  className="button-group-custom group-md group-middle wow fadeInDownSmall"
                  data-wow-delay="1.1s"
                >
                  <a className="button button-white-outline" href="#">
                    Details
                  </a>
                  <a className="button button-secondary" href="#">
                    Buy Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Promo;
