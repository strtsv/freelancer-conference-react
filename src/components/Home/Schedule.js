import React from "react";

import i1 from "../../assets/images/decor-element-04-673x860.png";
import i2 from "../../assets/images/team-mini-01-57x57.jpg";
import i3 from "../../assets/images/team-mini-02-57x57.jpg";
import i4 from "../../assets/images/team-mini-03-57x57.jpg";
import i5 from "../../assets/images/team-mini-04-57x57.jpg";
import i6 from "../../assets/images/team-mini-05-57x57.jpg";
import i7 from "../../assets/images/team-mini-06-57x57.jpg";
import i8 from "../../assets/images/team-mini-07-57x57.jpg";
import i9 from "../../assets/images/team-mini-08-57x57.jpg";

class Schedule extends React.Component {
  render() {
    return (
      <section
        className="section section-xl text-center bg-default section-decoration-3"
        id="schedule"
      >
        <div className="container container-relative">
          <div
            className="box-custom-image box-custom-image-02"
            data-parallax-scroll="{'y': 120,  'smoothness': 30}"
          >
            <img src={i1} alt width={673} height={860} />
          </div>
          <h2>
            <span className="text-primary text-oneline">Schedule</span> What to
            Expect
          </h2>
          <div className="row justify-content-center">
            <div className="col-xl-10 wow fadeIn" data-wow-delay=".5s">
              <div className="row box-table box-decor">
                <div
                  className="box-decor-image box-decor-image-03 custom-bg-image"
                  data-parallax-scroll="{'y': 120,  'smoothness': 30}"
                />
                <div className="col-12">
                  <div className="table-custom-responsive">
                    <table className="table-custom table-custom-bordered">
                      <thead className="bg-primary">
                        <tr>
                          <th>Time</th>
                          <th>Content</th>
                          <th>Speakers</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span>08:00 PM</span>
                            <span>to</span>
                            <span>09:00 AM</span>
                          </td>
                          <td>Event Registration</td>
                          <td />
                        </tr>
                        <tr>
                          <td>
                            <span>09:00 PM</span>
                            <span>to</span>
                            <span>10:00 AM</span>
                          </td>
                          <td>
                            How Innovations in Programming Can Benefit Your Apps
                          </td>
                          <td>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i2}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  Kate Williams
                                </div>
                                <div className="table-speaker-post">
                                  Programmer
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>10:00 PM</span>
                            <span>to</span>
                            <span>11:00 AM</span>
                          </td>
                          <td>
                            What Your Business Needs to Succeed in XXIst Century
                          </td>
                          <td>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i3}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  Peter Johnson
                                </div>
                                <div className="table-speaker-post">
                                  Entrepreneur
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-secondary">
                          <td>
                            <span>11:00 PM</span>
                            <span>to</span>
                            <span>11:30 AM</span>
                          </td>
                          <td>Coffee Break</td>
                          <td />
                        </tr>
                        <tr>
                          <td>
                            <span>11:30 AM</span>
                            <span>to</span>
                            <span>1:00 AM</span>
                          </td>
                          <td>
                            How Proper Interface, Content, and Marketing Create
                            a Better Path for Your Business
                          </td>
                          <td>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i4}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  Michelle Campbell
                                </div>
                                <div className="table-speaker-post">
                                  UX Designer
                                </div>
                              </div>
                            </div>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i5}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  Jessica Perry
                                </div>
                                <div className="table-speaker-post">
                                  Marketing Expert
                                </div>
                              </div>
                            </div>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i6}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  Will Chapman
                                </div>
                                <div className="table-speaker-post">
                                  Copywriter
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-primary">
                          <td>
                            <span>1:00 PM</span>
                            <span>to</span>
                            <span>2:00 PM</span>
                          </td>
                          <td>Dinner</td>
                          <td />
                        </tr>
                        <tr>
                          <td>
                            <span>2:00 PM</span>
                            <span>to</span>
                            <span>3:00 PM</span>
                          </td>
                          <td>
                            The Role of Public Relations in Your Company’s
                            Recognition
                          </td>
                          <td>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i7}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  Eugene Ramirez
                                </div>
                                <div className="table-speaker-post">
                                  PR Consultant
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>3:00 PM</span>
                            <span>to</span>
                            <span>4:00 AM</span>
                          </td>
                          <td>How Content Influences Your Website’s Design</td>
                          <td>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i8}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  Adam McMillan
                                </div>
                                <div className="table-speaker-post">
                                  Web Designer
                                </div>
                              </div>
                            </div>
                            <div className="table-speaker">
                              <div className="table-speaker-left">
                                <img
                                  className="img-rounded"
                                  src={i9}
                                  alt
                                  width={57}
                                  height={57}
                                />
                              </div>
                              <div className="table-speaker-body">
                                <div className="table-speaker-name">
                                  John Robinson
                                </div>
                                <div className="table-speaker-post">
                                  Content Strategist
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a className="button button-primary" href="#">
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

export default Schedule;
