import serviceIcon1 from "../../assets/images/services-icon-1.svg"
import serviceIcon2 from "../../assets/images/services-icon-2.svg"
import serviceIcon3 from "../../assets/images/services-icon-3.svg"
import serviceIcon4 from "../../assets/images/services-icon-4.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { GoArrowUpRight } from "react-icons/go";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const Services = () => {
  return (
    <div>
      {/*=== Start Services Area ===*/}
      <div className="services-area bg-color-030303 ptb-100">
        <div className="container">
          <div className="section-title white-title" data-cues="slideInUp">
            <span className="top-title">Our Services</span>
            <h2>Professional &amp; Creative Agency Solutions</h2>
          </div>
          <div className="row justify-content-center" data-cues="slideInUp">
            <div className="col-xl-3 col-sm-6">
              <div className="services-single-item">
                <div className="icon">
                  <img
                    src={serviceIcon1}
                    alt="services-icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Strategy Consulting</a>
                </h3>
                <p>Expert guidance in formulating and growth plans.</p>
                <ul className="ps-0 mb-0 list-unstyled">
                  <li>Product Management</li>
                  <li>Financial Advisory</li>
                  <li>Product Strategy</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="services-single-item">
                <div className="icon">
                  <img
                    src={serviceIcon2}
                    alt="services-icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Digital Marketing</a>
                </h3>
                <p>Expert guidance in formulating and growth plans.</p>
                <ul className="ps-0 mb-0 list-unstyled">
                  <li>Marketing Strategies</li>
                  <li>Business Development</li>
                  <li>Financial Advisory</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="services-single-item">
                <div className="icon">
                  <img
                    src={serviceIcon3}
                    alt="services-icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Web Development</a>
                </h3>
                <p>Expert guidance in formulating and growth plans.</p>
                <ul className="ps-0 mb-0 list-unstyled">
                  <li>Technology Solutions</li>
                  <li>Market Research Analysis</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="services-single-item">
                <div className="icon">
                  <img
                    src={serviceIcon4}
                    alt="services-icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Creative Design</a>
                </h3>
                <p>Expert guidance in formulating and growth plans.</p>
                <ul className="ps-0 mb-0 list-unstyled">
                  <li>Training &amp; Development</li>
                  <li>Sustainability Consulting</li>
                  <li>Crisis Management</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div className="text-center services-btn d-inline-block m-auto mt-lg-4">
                <a
                  href="services.html"
                  className="circle-btn text-decoration-none d-flex align-items-center justify-content-center"
                >
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Services Area ===*/}
    </div>
  );
};

export default Services;
