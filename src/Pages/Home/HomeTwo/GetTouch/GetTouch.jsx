import { Link } from "react-router-dom";
import bgImg from "../../../../assets/images/get-in-bg.jpg";

const GetTouch = () => {
  return (
    <div
      className="get-in-touch-area bg-img"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className="row align-items-center" data-cues="slideInUp">
          <div className="col-lg-8">
            <div className="get-in-touch-content">
              <span className="top-title style-two">Get In Touch</span>
              <h2>Have Any Question In Your Mind? Discuss With Us</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="get-in-touch-btn text-center text-lg-end mt-4 mt-lg-0">
              <Link to="/contact-us">
                <span>Let’s Talk</span>
                <i className="fa-regular fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
