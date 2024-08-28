import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import Contact from "../../components/Contact/Contact";
import useDataFetch from "../../components/Hooks/useDataFetch";
import Testominal from "../../components/Testominal/Testominal";

const Services = () => {
  const { data } = useDataFetch({ url: "/servicesOne.json" });
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Services"} />
      <div className="services-area pt-100 pb-75">
        <div className="container">          
          <div className="row justify-content-center" data-cues="slideInUp">
            {data?.map((service, idx) => (
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
    </div>
  );
};

export default Services;
