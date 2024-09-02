import bannerBg from "../../assets/images/banner-bg-shape.png";
import vdoImg from "../../assets/images/video-img.jpg";
import shape1 from "../../assets/images/shape-1.png";
import shape5 from "../../assets/images/shape-5.png";

import { useEffect } from 'react';
import $ from 'jquery';
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css"
import { Link } from "react-router-dom";


const HeroBanner = () => {

  useEffect(() => {
    // Initialize magnificPopup
    $('.popup-youtube').magnificPopup({
      disableOn: 300,
      type: 'iframe',
      mainClass: 'mfp-fade',
      fixedContentPos: false,
      removalDelay: 160,
      preloader: false,
    });

    // Cleanup function to remove event listeners
    return () => {
      $('.popup-youtube').magnificPopup('close');
    };
  }, []);

  return (
    <div>
      {/*=== Start Banner Area ===*/}
      <div
        className="banner-area bg-black bg-img"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="container mw-1680">
          <div 
            className="position-relative z-1"
            data-cues="slideInUp"
            data-group="images"
          >
            <div className="banner-content">
              <h1 className="mb-0">
                Hello <span>Cosmopolite!</span>
              </h1>
              <h1 className="mb-0">We are a Modern Creative Agency</h1>
              <h1>
                Based in <span>Canada</span>
              </h1>
              <Link to="/services" className="banner-btn">
                <span>
                  Explore Our Services
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
            <div className="creative-agency">
              <div className="position-relative d-block text-center m-auto video-img">
                <img src={vdoImg} className="rounded-pill" alt="video-img" />
                <a
                  href="https://www.youtube.com/watch?v=oGOO94rRzCQ"
                  className="popup-youtube video-btns position-absolute top-50 start-50 translate-middle text-decoration-none video-btn-animate"
                >
                  <i className="fa-sharp fa-solid fa-play fa-fw"></i>
                </a>
              </div>
              <p>
                Hi 👋. We are Stir A brand-driven Creative agency that infuses
                authenticity into everything we do.
              </p>
            </div>
            <a href="#about-us" className="scroll-btn">
              <i className="fa-sharp fa-light fa-arrow-down icon"></i>
            </a>
          </div>
        </div>
        <img src={shape1} className="shape shape-1" alt="shape" />
        <img src={shape5} className="shape shape-5" alt="shape" />
      </div>
      {/*=== End Banner Area ===*/}
    </div>
  );
};

export default HeroBanner;
