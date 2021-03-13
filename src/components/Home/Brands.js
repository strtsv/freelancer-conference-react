import React from "react";

import i1 from "../../assets/images/decor-element-06-1181x1376.png";
import i2 from "../../assets/images/brand-01-241x112.png";
import i3 from "../../assets/images/brand-02-225x112.png";
import i4 from "../../assets/images/brand-03-230x112.png";
import i5 from "../../assets/images/brand-04-254x112.png";
import i6 from "../../assets/images/brand-05-236x112.png";
import i7 from "../../assets/images/brand-06-269x112.png";
import i8 from "../../assets/images/brand-07-242x112.png";
import i9 from "../../assets/images/brand-08-198x112.png";

class Brands extends React.Component {
  render() {
    return (
      <section
        className="section section-xl text-center bg-default section-decoration-4"
        id="partners"
      >
        <div className="container container-relative">
          <div
            className="box-custom-image box-custom-image-04"
            data-parallax-scroll="{'y': 250,  'smoothness': 30}"
          >
            <img src={i1} alt width={1181} height={1376} />
          </div>
          <h2>
            Our<span className="text-primary"> Partners</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row justify-content-center align-items-center row-sm-47">
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i2} alt width={241} height={112} />
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i3} alt width={225} height={112} />
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i4} alt width={230} height={112} />
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i5} alt width={254} height={112} />
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i6} alt width={236} height={112} />
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i7} alt width={269} height={112} />
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i8} alt width={242} height={112} />
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="partners-classic" href="#">
                    <img src={i9} alt width={198} height={112} />
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

export default Brands;
