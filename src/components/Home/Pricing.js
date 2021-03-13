import React from "react";

import i from "../../assets/images/decor-element-05-407x533.png";

class Pricing extends React.Component {
  render() {
    return (
      <section
        className="section section-md text-center bg-default section-decoration-3"
        id="pricing"
      >
        <div className="container container-relative">
          <div
            className="box-custom-image box-custom-image-03"
            data-parallax-scroll="{'y': 150,  'smoothness': 40}"
          >
            <img src={i} alt width={407} height={533} />
          </div>
          <h2>
            Ticket<span className="text-primary"> Pricing</span>
          </h2>
          <div className="row justify-content-center box-decor">
            <div
              className="box-decor-image box-decor-image-04 custom-bg-image"
              data-parallax-scroll="{'y': 120,  'smoothness': 30}"
            />
            <div className="col-10">
              <div className="row justify-content-center row-30">
                <div
                  className="col-12 col-md-6 col-lg-4 wow fadeInDownSmall"
                  data-wow-delay=".3s"
                >
                  <div className="box-pricing box-pricing-primary">
                    <div className="box-pricing-top">
                      <h3 className="box-pricing-title">Basic</h3>
                    </div>
                    <div className="box-pricing-main">
                      <ul className="list-classic">
                        <li>1-Day Entrance</li>
                        <li>Essential Access</li>
                        <li>1 Guest Ticket</li>
                        <li>1 Workshop</li>
                        <li>Free Coffee Break</li>
                      </ul>
                      <div className="box-pricing-price">
                        <span>$</span>
                        <span className="big">29</span>
                        <span>.00</span>
                      </div>
                      <a className="button button-mini button-primary" href="#">
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-md-6 col-lg-4 wow fadeInDownSmall"
                  data-wow-delay=".4s"
                >
                  <div className="box-pricing box-pricing-secondary">
                    <div className="box-pricing-top">
                      <h3 className="box-pricing-title">Standard</h3>
                    </div>
                    <div className="box-pricing-main">
                      <ul className="list-classic">
                        <li>3-Day Entrance</li>
                        <li>Extended Access</li>
                        <li>3 Guest Tickets</li>
                        <li>3 Workshops</li>
                        <li>Free Lunch & Merch</li>
                      </ul>
                      <div className="box-pricing-price">
                        <span>$</span>
                        <span className="big">59</span>
                        <span>.00</span>
                      </div>
                      <a
                        className="button button-mini button-secondary"
                        href="#"
                      >
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-md-6 col-lg-4 wow fadeInDownSmall"
                  data-wow-delay=".5s"
                >
                  <div className="box-pricing box-pricing-secondary-1">
                    <div className="box-pricing-top">
                      <h3 className="box-pricing-title">Premium</h3>
                    </div>
                    <div className="box-pricing-main">
                      <ul className="list-classic">
                        <li>4-Day Entrance</li>
                        <li>Ultimate Access</li>
                        <li>5 Guest Tickets</li>
                        <li>7 Workshops</li>
                        <li>Free Entertainment</li>
                      </ul>
                      <div className="box-pricing-price">
                        <span>$</span>
                        <span className="big">79</span>
                        <span>.00</span>
                      </div>
                      <a
                        className="button button-mini button-secondary-1"
                        href="#"
                      >
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
