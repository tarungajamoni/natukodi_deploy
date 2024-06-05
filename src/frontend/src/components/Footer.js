import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-12">
              <div className="right-text-content">
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.instagram.com/natukodipulav?igsh=NTc4MTIwNjQ2YQ=="
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/natukodipulav?mibextid=PtKPJ9"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  {/* <li><a href="#"><i class="fa fa-twitter"></i></a></li> */}
                  <li>
                    <a
                      href="https://maps.app.goo.gl/8NmPsNvqa88NpMiC7"
                      target="_blank"
                    >
                      <i className="fa fa-map-marker" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/images/white-logo.png"
                    alt="NatukodiPulav Restaurant Logo"
                  />
                </a>
              </div>
              <div className="left-text-content">
                <p>fssai License Number: 23624028000183</p>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <div className="left-text-content">
                <p>
                  Copyright © Natukodi Pulav &amp; Restaurant.
                  <br />
                  Natukodi Pulav, Amangal, Rangareddy -509321
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer