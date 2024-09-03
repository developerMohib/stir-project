import { Link } from "react-router-dom";
import useDataFetch from "../../components/Hooks/useDataFetch";

const ServicesThree = () => {
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
                
                <Link to="/service-details"> {ser.serviceName} </Link>
              </h3>
              <p>
                {ser.title}
              </p>
              <Link to="/service-details" className="read-more">
                VIEW DETAILS
              </Link>
            </div>
          </div>))
    }
        </div>
      </div>
    </div>
    );
};

export default ServicesThree;