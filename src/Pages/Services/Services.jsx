import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from '../../components/BreadCump/BreadCump';
import useDataFetch from "../../components/Hooks/useDataFetch";

const Services = () => {
    const {data} = useDataFetch({ url: "/servicesOne.json"})
    return (
        <div>
            <BreadCump bgImg={shapeBg} pageName={"Services"} />
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
        </div>
    );
};

export default Services;