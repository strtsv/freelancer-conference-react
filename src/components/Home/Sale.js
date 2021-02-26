import React from "react";

class Sale extends React.Component {
  render() {
    return (
      <section className="text-center section-geometry bg-custom-02">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11">
              <div className="row">
                <div
                  className="col-12"
                  style={{
                    overflow: "hidden"
                  }}
                >
                  <h3 className="wow fadeInDownSmall" data-wow-delay=".4s">
                    {" "}
                    10% Sale offer for early birds
                  </h3>
                  <div className="box-sale">
                    <h2 className="wow fadeInUpSmall" data-wow-delay=".3s">
                      Meet
                      <span className="text-secondary-1 big">
                        {" "}
                        Top IT Masters
                      </span>{" "}
                      & Influencers in a
                      <span className="biggest text-secondary">
                        {" "}
                        UNIQUE
                      </span>{" "}
                      Experience
                    </h2>
                  </div>
                  <a
                    className="button button-secondary wow fadeInDownSmall"
                    href="#"
                    data-wow-delay=".4s"
                  >
                    BUY TICKET now
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

export default Sale;
