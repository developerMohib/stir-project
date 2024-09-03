import { Link } from "react-router-dom";
import Testominal from "../../components/Testominal/Testominal";

const Testominaltwo = () => {
  return (
    <div>
      {/* Start marquee Us Area */}
      <div className="marquee-area bg-color-dcfd68">
        <div className="container-fluid">
          <div className="marquee-wrapper"> 
            <div className="marquee" data-cues="slideInUp">
              <Link to="/contact-us">
                <span>CONTACT US</span>
              </Link>
              <Link to="/contact-us">
                <span>OUR CASE STUDIES</span>
              </Link>
              <Link to="/contact-us">
                <span>LET’S TALK</span>
              </Link>
              <Link to="/contact-us">
                <span>GET IN TOUCH</span>
              </Link>
              <Link to="/contact-us">
                <span>CONTACT US</span>
              </Link>
              <Link to="/contact-us">
                <span>OUR CASE STUDIES</span>
              </Link>
              <Link to="/contact-us">
                <span>LET’S TALK</span>
              </Link>
              <Link to="/contact-us">
                <span>GET IN TOUCH</span>
              </Link>
              <Link to="/contact-us">
                <span>CONTACT US</span>
              </Link>
              <Link to="/contact-us">
                <span>OUR CASE STUDIES</span>
              </Link>
              <Link to="/contact-us">
                <span>LET’S TALK</span>
              </Link>
              <Link to="/contact-us">
                <span>GET IN TOUCH</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End marquee Us Area */}
      <Testominal />
    </div>
  );
};

export default Testominaltwo;
