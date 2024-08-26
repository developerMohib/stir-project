import { Link } from "react-router-dom";
import useDataFetch from "../../../../components/Hooks/useDataFetch";
const Services = () => {
  const { data } = useDataFetch({ url: "/services.json" });
  return (
    <div className="services-area-two pb-100 overflow-hidden pos">
      <div className="container">
        <div className="section-title style-two mw-730" data-cues="slideInUp">
          <span className="top-title style-two">Services We Provide</span>
          <h2>We Provide The Best Service for Our Agency</h2>
        </div>
        <div className="services-wrap" data-cues="slideInUp">
          <div className="services-slide owl-carousel owl-theme">
            {data?.map((ser, idx) => (
              <div key={idx} className="services-single-item-two">
                <span className="borders" />
                <h3>
                  <Link to="/service-details"> {ser.serviceName} </Link>
                </h3>
                <p> {ser.title}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={ser.iconImg} alt="services-icon" />
                  <Link to="service-details" className="read-btn">
                    {" "}
                    <i className="fa-regular fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
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
