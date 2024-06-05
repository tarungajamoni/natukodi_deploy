import React from 'react'

function About() {
  return (
    <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h2>We Leave A Delicious Memory For You</h2>
                </div>
                <p>
                  Natukodi Pulav is one of the best{" "}
                  <a
                    href="https://templatemo.com/tag/restaurant"
                    target="_blank"
                    rel="sponsored"
                  >
                    restaurant.
                  </a>
                  Your one-stop destination for authentic Indian cuisine. Our
                  restaurant is open from early morning to late night, serving a
                  wide range of dishes that cater to all your cravings.Whether
                  you're in the mood for a hearty breakfast, a quick tiffin, a
                  sumptuous lunch, or a satisfying dinner, we've got you
                  covered. <br />
                  <br />
                  Our dishes are made with fresh ingredients and authentic
                  spices that will tantalize your taste buds. Come visit us
                  today and experience the true flavors of India!.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img
                      src="assets/images/about-thumb-01.jpg"
                      alt="NatukodiPulav Restaurant"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="assets/images/about-thumb-02.jpg"
                      alt="NatukodiPulav Restaurant"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="assets/images/about-thumb-03.jpg"
                      alt="NatukodiPulav Restaurant"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="right-content">
                <div className="thumb">
                  <a
                    rel="nofollow"
                    href="https://www.instagram.com/natukodipulav?igsh=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                  >
                    <i className="fa fa-play" />
                  </a>
                  <img
                    src="assets/images/about-video-bg.jpg"
                    alt="NatukodiPulav Restaurant"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About