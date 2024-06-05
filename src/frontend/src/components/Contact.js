import React from 'react'

function Contact() {
  return (
    <section className="section" id="reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-self-center">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>
                    Here You Can Make A Reservation Or Just walkin to our
                    Restaurant
                  </h2>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="phone">
                      <i className="fa fa-phone" />
                      <h4>Phone Number</h4>
                      <span>
                        <a href="tel:9000080285">9000-080-285</a>
                      </span>
                      <span>
                        <br />
                        <br />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="message">
                      <i className="fa fa-envelope" />
                      <h4>Email</h4>
                      <span>
                        <a href="mailto:natukodipulav1@gmail.com">natukodipulav1@gmail.com</a>
                      </span>
                      <span>
                        <br />
                        <br />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <span>
                      <br />
                      <br />
                    </span>
                  </div>
                  <div className="col-lg-5">
                    <div className="phone">
                      <i className="fa fa-map-marker" />
                      <h4>NatukodiPulav</h4>
                      <span>
                        <a
                          href="https://maps.app.goo.gl/8NmPsNvqa88NpMiC7"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Srisailam Highway, Amangal, Rangareddy-509321
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact