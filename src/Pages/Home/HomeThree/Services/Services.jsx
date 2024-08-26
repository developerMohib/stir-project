import useDataFetch from "../../../../components/Hooks/useDataFetch";

const Services = () => {
    const { data } = useDataFetch({ url: "/servicesthree.json" });
  return (
    <div className="services-area-three pt-100 mt-5">
      <div className="container">
        <div className="section-title style-three" data-cues="slideInUp">
          <h2>What We Can Do for Our Clients</h2>
        </div>
        <div className="row justify-content-center" data-cues="slideInUp">

    {
        data?.map((ser, idx)=>(<div key={idx} className="col-xl-4 col-md-6">
            <div className="services-single-item-three">
              <img
                src={ser.iconImg}
                alt="services-icon"
              />
              <h3>
                <a href="service-details.html"> {ser.serviceName} </a>
              </h3>
              <p>
                {ser.title}
              </p>
              <a href="service-details.html" className="read-more">
                VIEW DETAILS
              </a>
            </div>
          </div>))
    }
        </div>
      </div>
    </div>
  );
};

export default Services;
