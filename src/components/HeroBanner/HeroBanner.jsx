import bannerBg from "../../assets/images/banner-bg-shape.png"
import vdoImg from "../../assets/images/video-img.jpg"
import shape1 from "../../assets/images/shape-1.png"
import shape5 from "../../assets/images/shape-5.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

import { LuArrowUpRight } from "react-icons/lu";
import "../../assets/css/style.css"


const HeroBanner = () => {
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
              <a href="services.html" className="banner-btn">
                <span>
                  Explore Our Services
                  <LuArrowUpRight />
                </span>
              </a>
            </div>
            <div className="creative-agency">
              <div className="position-relative d-block text-center m-auto video-img">
                <img
                  src={vdoImg}
                  className="rounded-pill"
                  alt="video-img"
                />
                <a
                  href="https://youtu.be/bk7McNUjWgw?si=m_dHkilr3ALPzNl9"
                  className="popup-youtube video-btns position-absolute top-50 start-50 translate-middle text-decoration-none video-btn-animate"
                >
                  <FontAwesomeIcon icon={faPlay} className="fa-fw" />
                </a>
              </div>
              <p>
                Hi 👋. We are Stir A brand-driven Creative agency that infuses
                authenticity into everything we do.
              </p>
            </div>
            <a href="#about-us" className="scroll-btn">
            <FontAwesomeIcon icon={faArrowDownLong} />
            </a>
          </div>
        </div>
        <img
          src={shape1}
          className="shape shape-1"
          alt="shape"
        />
        <img
          src={shape5}
          className="shape shape-5"
          alt="shape"
        />
      </div>
      {/*=== End Banner Area ===*/}
    </div>
  );
};

export default HeroBanner;
