
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const Services = ({ data = [] }) => {
  console.log("data ", data);
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
            {data?.map((service, idx) => (
              <div key={idx} className="col-xl-3 col-sm-6">
                <div className="services-single-item">
                  <div className="icon">
                    <img
                      src={service.iconImg}
                      alt={`${service.serviceName}-icon`}
                    />
                  </div>
                  <h3>
                    <a href="service-details.html">{service.serviceName}</a>
                  </h3>
                  <p>{service.title}</p>
                  <ul className="ps-0 mb-0 list-unstyled">
                    {service?.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*=== End Services Area ===*/}
    </div>
  );
};
Services.propTypes = {
  data: PropTypes.array,
};
export default Services;
