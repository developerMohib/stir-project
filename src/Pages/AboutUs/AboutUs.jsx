import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import BreadCump from "../../components/BreadCump/BreadCump";
import shapeTwo from "../../assets/images/banner-bg-shape2.png";
import { useEffect, useState } from "react";
import Services from "../../components/Services/Services";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("/servicesOne.json"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
//   console.log("Fetched Data:", data);
  if (loading) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
      <BreadCump bgImg={shapeTwo} pageName={"About Us"} />
      <Services data={data} />
      <div className="services-area pb-75">
        <div className="container">
          <div className="section-title" data-cues="slideInUp">
            <span className="top-title">Our Services</span>
            <h2>Professional & Creative Agency Solutions</h2>
          </div>
          <div className="row justify-content-center" data-cues="slideInUp">
            {data?.map((service, index) => (
              <div key={index} className="col-xl-3 col-sm-6 mb-4">
                <div className="services-single-item text-center p-4 border rounded">
                  <div className="icon mb-3">
                    <img
                      src={service.iconImg}
                      alt={`${service.serviceName}-icon`}
                    />
                  </div>
                  <h3>
                    <a
                      href="service-details.html"
                      className="text-decoration-none"
                    >
                      {service.serviceName}
                    </a>
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
    </div>
  );
};

export default AboutUs;
