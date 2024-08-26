import mapsvg from "../../../../assets/images/map.svg";
import banner3 from "../../../../assets/images/banner-img-three.jpg";
import shape4 from "../../../../assets/images/shape-4.png";
const Banner = () => {
  return (
    <div className="banner-area-three position-relative">
      <div className="container mw-1680">
        <div
          className="banner-content-three"
          data-cues="slideInUp"
          data-group="images"
        >
          <h1>DIGITAL</h1>
          <h1 className="agency">AGENCY</h1>
          <div className="agency-info">
            <p>
              Hi 👋. We are Stir A brand-driven Digital agency that infuses
              authenticity into everything we do.
            </p>
            <div className="d-flex align-items-center map-info">
              <div className="flex-shrink-0">
                <div className="map-icon">
                  <img src={mapsvg} alt="map" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4>AGENCY OF THIS YEAR WORLDWIDE</h4>
              </div>
            </div>
          </div>
          <a href="services.html" className="banner-btn">
            <span>
              Explore Our Services
              <i className="fa-solid fa-arrow-up-right" />
            </span>
          </a>
        </div>
      </div>
      <img src={banner3} className="banner-img-three" alt="banner-img" />
      <img src={shape4} className="shape shape-4" alt="shape" />
      <a href="#about-us" className="scroll-btn">
        <i className="fa-sharp fa-light fa-arrow-down" />
      </a>
    </div>
  );
};

export default Banner;
