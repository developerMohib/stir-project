import BreadCump from "../../components/BreadCump/BreadCump";
import shapeTwo from "../../assets/images/banner-bg-shape2.png";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "../../components/Contact/Contact";
import Testominal from "../../components/Testominal/Testominal";
import useDataFetch from "../../components/Hooks/useDataFetch";

const AboutUs = () => {
  const { data } = useDataFetch({ url: "/servicesOne.json" });

  // Get the first four items from the data array
  const limitedData = data ? data.slice(0, 4) : [];
  return (
    <div>
      <BreadCump bgImg={shapeTwo} pageName={"About Us"} />
      <Aboutus />
      <div className="services-area pt-100 pb-75">
        <div className="container">      
        <div className={`section-title`} data-cues="slideInUp">
            <span className="top-title">Our Services</span>
            <h2>Professional &amp; Creative Agency Solutions</h2>
          </div>    
          <div className="row justify-content-center" data-cues="slideInUp">
            {limitedData?.map((service, idx) => (
              <div key={idx} className="col-xl-3 col-sm-6">
                <div className="services-single-item style-two style-three">
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


          <Testominal />
          <Contact bgColor={" "} />
        </div>
      </div>
      <Testominal />
      <Contact bgColor={"#fff"} />
    </div>
  );
};

export default AboutUs;
