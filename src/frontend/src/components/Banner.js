import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const sliderRef = React.useRef(null);

  return (
    <div id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-content">
              <div className="inner-content">
                <h4>NatukodiPul</h4>
                <h6>RESTAURANT</h6>
                <div className="main-white-button scroll-to-section">
                  <a
                    href="https://maps.app.goo.gl/8NmPsNvqa88NpMiC7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-map-marker">&nbsp;</i> Open In Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="main-banner header-text">
              <div className="slider-wrapper" style={{ position: 'relative' }}>
                <Slider {...settings} ref={sliderRef}>
                  <div className="item">
                    <div className="img-fill">
                      <img
                        src="assets/images/slide-01.jpg"
                        alt="NatukodiPulav Restaurant"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="img-fill">
                      <img
                        src="assets/images/slide-02.jpg"
                        alt="NatukodiPulav Restaurant"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="img-fill">
                      <img
                        src="assets/images/slide-03.jpg"
                        alt="NatukodiPulav Restaurant"
                      />
                    </div>
                  </div>
                </Slider>
                {/* Next and previous arrows positioned absolutely */}
                <div className="slick-prev" style={{ left: 10, zIndex: 1 }} onClick={goToPrevSlide}></div>
                <div className="slick-next" style={{ right: 10, zIndex: 1 }} onClick={goToNextSlide}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
