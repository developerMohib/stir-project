import targetsvg from "../../assets/images/target.svg";
import shape2 from "../../assets/images/shape-2.png";
import bannerShape from "../../assets/images/banner-img-shape.png";

import bannerImg from "../../assets/images/banner-img.png";
import { Link } from "react-router-dom";

const BannerTwo = () => {
    return (
        <div className="banner-area-two">
      <div className="container mw-1680">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div
              className="banner-content-two position-relative"
              data-cues="slideInUp"
              data-group="images"
            >
              <div className="target">
                <img
                  src={targetsvg}
                  className="target-icon"
                  alt="target"
                />
                <span>More Than A Business Agency.</span>
              </div>
              <h2>Delivering Unique Solutions for Success</h2>
              <p>
                Welcome to Stir, where innovation meets strategy &amp;
                excellence is our standard. As a premier business agency,
                Business agencies are specialized entities...
              </p>
              <div className="d-flex align-items-center">
                <Link to="/blog" className="main-btn style-two" ><span>Learn More</span>
                <i className="fa-regular fa-arrow-right" /> </Link>

                <Link
                to="/about-us"
                  className="circle-btn-two position-relative"
                >
                  <div className="btn-info">
                    <span>About Us</span>
                    <i className="fa-solid fa-arrow-up-right" />
                  </div>
                </Link>
              </div>
              <img
                src={shape2}
                className="shape shape-2"
                alt="shape"
              />
            </div>
          </div>
          <div className="col-lg-5" data-cues="slideInUp">
            <div className="banner-img">
              <img src={bannerImg} alt="banner-img" />
              <img
                src={bannerShape}
                className="banner-img-shape"
                alt="banner-img-shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BannerTwo;