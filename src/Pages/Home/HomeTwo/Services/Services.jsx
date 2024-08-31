
  const items = [
    { id: 1, content: "1" },
    { id: 2, content: "2" },
    { id: 3, content: "3" },
    { id: 4, content: "4" },
    { id: 5, content: "5" },
    { id: 6, content: "6" },
    { id: 7, content: "7" },
    { id: 8, content: "8" },
    { id: 9, content: "9" },
    { id: 10, content: "10" },
    { id: 11, content: "11" },
    { id: 12, content: "12" },
  ];
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import useDataFetch from "../../../../components/Hooks/useDataFetch";
const Services = () => {
  const { data } = useDataFetch({ url: "/services.json" });

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };


  return (
    <div className="services-area-two pb-100 overflow-hidden pos">
      <div className="container">
        <div className="section-title style-two mw-730" data-cues="slideInUp">
          <span className="top-title style-two">Services We Provide</span>
          <h2>We Provide The Best Service for Our Agency</h2>
        </div>
        <div className="services-wrap" data-cues="slideInUp">
          <OwlCarousel
            className="services-slide owl-carousel owl-theme" {...options}
          >
            {data?.map((ser, idx) => (
              <div key={idx} className="services-single-item-two">
                <span className="borders" />
                <h3>
                  <Link to="/service-details"> {ser?.serviceName} </Link>
                </h3>
                <p> {ser?.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={ser?.iconImg} alt="services-icon" />
                  <Link to="service-details" className="read-btn">
                    {" "}
                    <i className="fa-regular fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
            

          </OwlCarousel>
        </div>
        <div className="text-center mt-lg-4 pt-lg-2">
          <Link to="/services" className="main-btn border-btn d-inline-block">
            <span>Browse All Services</span>
            <i className="fa-regular fa-arrow-right" />
          </Link>
        </div>
      </div>
      <OwlCarousel {...options}>
        {items.map((item) => (
          <div className="item" key={item.id}>
            <h4>{item.content}</h4>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Services;
