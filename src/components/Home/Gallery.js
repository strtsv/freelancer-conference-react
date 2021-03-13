import React from "react";

import i1 from "../../assets/images/decor-element-03-1261x1675.png";
import i2 from "../../assets/images/gallery-01-302x371.jpg";
import i3 from "../../assets/images/gallery-02-302x371.jpg";
import i4 from "../../assets/images/gallery-03-302x371.jpg";
import i5 from "../../assets/images/gallery-04-302x371.jpg";
import i6 from "../../assets/images/gallery-05-302x371.jpg";
import i7 from "../../assets/images/gallery-06-302x371.jpg";
import i8 from "../../assets/images/team-01-270x362.jpg";
import i9 from "../../assets/images/team-02-270x362.jpg";
import i10 from "../../assets/images/team-03-270x362.jpg";
import i11 from "../../assets/images/team-04-270x362.jpg";
import i12 from "../../assets/images/team-05-270x362.jpg";
import i13 from "../../assets/images/team-06-270x362.jpg";
import i14 from "../../assets/images/team-07-270x362.jpg";
import i15 from "../../assets/images/team-08-270x362.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <section className="section section-xl text-center bg-default section-decoration-2">
        {}
        <div className="container container-relative" id="gallery">
          <div
            className="box-custom-image box-custom-image-01"
            data-parallax-scroll="{'y': 200,  'smoothness': 30}"
          >
            <img src={i1} alt width={1261} height={1675} />
          </div>
          <h2>
            Our<span className="text-primary"> Gallery</span>
          </h2>
          <div className="row justify-content-center box-decor">
            <div
              className="box-decor-image box-decor-image-02 custom-bg-image"
              data-parallax-scroll="{'y': 100,  'smoothness': 35}"
            />
            <div className="col-xl-10">
              <div className="row row-30" data-lightgallery="group">
                <div
                  className="col-sm-6 col-lg-4 wow fadeInUpSmall"
                  data-wow-delay=".2s"
                >
                  {}
                  <article className="thumbnail thumbnail-modern thumbnail-sm">
                    <a
                      className="thumbnail-modern-figure"
                      href="images/gallery-01-1200x800-original.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i2} alt width={302} height={371} />
                      <span className="icon icon-lg icon-white fa fa-search" />
                    </a>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-lg-4 wow fadeInUpSmall"
                  data-wow-delay=".3s"
                >
                  {}
                  <article className="thumbnail thumbnail-modern thumbnail-sm">
                    <a
                      className="thumbnail-modern-figure"
                      href="images/gallery-02-1200x800-original.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i3} alt width={302} height={371} />
                      <span className="icon icon-lg icon-white fa fa-search" />
                    </a>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-lg-4 wow fadeInUpSmall"
                  data-wow-delay=".4s"
                >
                  {}
                  <article className="thumbnail thumbnail-modern thumbnail-sm">
                    <a
                      className="thumbnail-modern-figure"
                      href="images/gallery-03-1200x800-original.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i4} alt width={302} height={371} />
                      <span className="icon icon-lg icon-white fa fa-search" />
                    </a>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-lg-4 wow fadeInUpSmall"
                  data-wow-delay=".5s"
                >
                  {}
                  <article className="thumbnail thumbnail-modern thumbnail-sm">
                    <a
                      className="thumbnail-modern-figure"
                      href="images/gallery-04-1200x800-original.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i5} alt width={302} height={371} />
                      <span className="icon icon-lg icon-white fa fa-search" />
                    </a>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-lg-4 wow fadeInUpSmall"
                  data-wow-delay=".6s"
                >
                  {}
                  <article className="thumbnail thumbnail-modern thumbnail-sm">
                    <a
                      className="thumbnail-modern-figure"
                      href="images/gallery-05-1200x800-original.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i6} alt width={302} height={371} />
                      <span className="icon icon-lg icon-white fa fa-search" />
                    </a>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-lg-4 wow fadeInUpSmall"
                  data-wow-delay=".7s"
                >
                  {}
                  <article className="thumbnail thumbnail-modern thumbnail-sm">
                    <a
                      className="thumbnail-modern-figure"
                      href="images/gallery-06-1200x800-original.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i7} alt width={302} height={371} />
                      <span className="icon icon-lg icon-white fa fa-search" />
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="container" id="speakers">
          <h2>
            Our<span className="text-primary"> Speakers</span>
          </h2>
          {}
          <div
            className="owl-carousel owl-carousel-creative"
            data-items={1}
            data-md-items={2}
            data-lg-items={3}
            data-xl-items={4}
            data-dots="true"
            data-nav="false"
            data-stage-padding={15}
            data-loop="false"
            data-margin={30}
            data-mouse-drag="false"
          >
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i8} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">Peter Johnson</a>
                  </h3>
                  <p className="box-team-company">Entrepreneur</p>
                  <p>
                    Founder and former owner of BizAdvisory, Mr. Johnson is an
                    award-winning business coach.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i9} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">Kate Williams</a>
                  </h3>
                  <p className="box-team-company">Programmer</p>
                  <p>
                    Ms. Williams is the author of several programming
                    bestsellers and highly acclaimed developer.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i10} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">Adam McMillan</a>
                  </h3>
                  <p className="box-team-company">Web Designer</p>
                  <p>
                    Adam worked with IT industry giants and he designed websites
                    for a variety of companies.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i11} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">Will Chapman</a>
                  </h3>
                  <p className="box-team-company">Marketing Expert</p>
                  <p>
                    Will Chapman knows how to make even a small startup the
                    greatest marketing success.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i12} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">Eugene Ramirez</a>
                  </h3>
                  <p className="box-team-company">PR Consultant</p>
                  <p>
                    Eugene is one of the most successful experts of public
                    relations who has worked with various companies.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i13} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">Michelle Campbell</a>
                  </h3>
                  <p className="box-team-company">UX Designer</p>
                  <p>
                    Michelle has worked on over 150 award-winning web projects
                    during her career in UX design.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i14} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">John Robinson</a>
                  </h3>
                  <p className="box-team-company">Content Strategist</p>
                  <p>
                    John’s portfolio of content management includes over 200
                    perfectly done projects.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-team">
              <div className="box-team-inner">
                <div className="box-team-image">
                  <img src={i15} alt width={270} height={362} />
                </div>
                <div className="box-team-caption">
                  <h3 className="box-team-title">
                    <a href="#">Jessica Perry</a>
                  </h3>
                  <p className="box-team-company">Copywriter</p>
                  <p>
                    Jessica Perry is a professionally certified copywriter who
                    has cooperated with a variety of publishers.
                  </p>
                  {}
                  <ul className="list-inline list-inline-md">
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-dribbble"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-linkedin-square"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon fa fa-instagram"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
