import { Link } from "react-router-dom";
import service5 from "../../../../assets/images/services-icon-5.svg";
import service6 from "../../../../assets/images/services-icon-6.svg";
import service7 from "../../../../assets/images/services-icon-7.svg";
import service8 from "../../../../assets/images/services-icon-8.svg";
const Services = () => {
  return (
    <div className="services-area-two pb-100 overflow-hidden pos">
      <div className="container">
        <div className="section-title style-two mw-730" data-cues="slideInUp">
          <span className="top-title style-two">Services We Provide</span>
          <h2>We Provide The Best Service for Our Agency</h2>
        </div>
        <div className="services-wrap" data-cues="slideInUp">
          <div className="services-slide owl-carousel owl-theme">
            <div className="services-single-item-two">
              <span className="borders" />
              <h3>
              <Link to="/service-details">Strategic Consulting</Link>
              </h3>
              <p>
                Our expert consultants offer tailored devices aligned with your
                craft objective. From market analysis and growth strategies...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <img src={service5} alt="services-icon" />
                <Link to="service-details" className="read-btn">
                  {" "}
                  <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="services-single-item-two">
              <span className="borders" />
              <h3>
              <Link to="/service-details">Digital Transformation</Link>
              </h3>
              <p>
                Our expert consultants offer tailored devices aligned with your
                craft objective. From market analysis and growth strategies...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <img src={service6} alt="services-icon" />
                <Link to="service-details" className="read-btn">
                  {" "}
                  <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="services-single-item-two">
              <span className="borders" />
              <h3>
                <Link to="/service-details">Marketing and Branding</Link>
              </h3>
              <p>
                Our expert consultants offer tailored devices aligned with your
                craft objective. From market analysis and growth strategies...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <img src={service7} alt="services-icon" />
                <Link to="service-details" className="read-btn">
                  {" "}
                  <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="services-single-item-two">
              <span className="borders" />
              <h3>
              <Link to="/service-details">Financial Advisory Services</Link>
              </h3>
              <p>
                Our expert consultants offer tailored devices aligned with your
                craft objective. From market analysis and growth strategies...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <img src={service8} alt="services-icon" />
                <Link to="service-details" className="read-btn">
                  {" "}
                  <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-lg-4 pt-lg-2">
          <Link to="/services" className="main-btn border-btn d-inline-block">
            <span>Browse All Services</span>
            <i className="fa-regular fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
