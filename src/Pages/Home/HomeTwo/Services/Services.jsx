import "./services.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import icon5 from "../../../../assets/images/services-icon-5.svg";
import icon6 from "../../../../assets/images/services-icon-6.svg";
import icon7 from "../../../../assets/images/services-icon-7.svg";
import icon8 from "../../../../assets/images/services-icon-8.svg";

const Services = () => {
  const testimonials = [
    {
      iconImg: icon5,
      serviceName: "Strategic Consulting",
      title:
        "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis and growth strategies...",
    },
    {
      iconImg: icon6,
      serviceName: "Digital Transformation",
      title:
        "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis and growth strategies...",
    },
    {
      iconImg: icon7,
      serviceName: "Marketing and Branding",
      title:
        "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis and growth strategies...",
    },
    {
      iconImg: icon8,
      serviceName: "Financial Advisory Services",
      title:
        "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis and growth strategies...",
    },
  ];

  return (
    <div className="services-area-two pb-100 overflow-hidden pos">
      <div className="container">
        <div className="section-title style-two mw-730" data-cues="slideInUp">
          <span className="top-title style-two">Services We Provide</span>
          <h2>We Provide The Best Service for Our Agency</h2>
        </div>

        <div className="testimonial-area pb-100">
          <div className="container">
            <div className="services-wrap">
              <OwlCarousel
                className="testimonial-slide owl-carousel owl-theme"
                loop
                margin={30}
                nav
                autoplay
                autoplayTimeout={3000}
                autoplayHoverPause
                responsive={{
                  0: {
                    items: 1,
                  },
                  768: {
                    items: 2,
                  },
                  1000: {
                    items: 4,
                  },
                }}
              >
                {testimonials?.map((testimonial, index) => (
                  <div key={index} className="services-single-item-two">
                    <span className="borders" />
                    <h3>
                      <Link to="/service-details">
                        {" "}
                        {testimonial?.serviceName}{" "}
                      </Link>
                    </h3>
                    <p> {testimonial?.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={testimonial?.iconImg} alt="services-icon" />
                      <Link to="/service-details" className="read-btn">
                        {" "}
                        <i className="fa-regular fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
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
