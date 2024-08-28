import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <div className="footer-area-three bg-color-f6f5f3">
      <div className="container">
        <div className="row align-items-center" data-cues="slideInUp">
          <div className="col-lg-4 col-sm-6">
            <div className="footer-single-item-three">
              <h2>Let’s Work Together</h2>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="footer-single-item-three">
              <ul className="ps-0 mb-0 list-unstyled social-link">
                <li>
                  <Link to="https://www.facebook.com/" target="_blank">
                    FACEBOOK{" "}
                  </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/" target="_blank">
                    TWITTER
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/" target="_blank">
                    LINKEDIN
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/" target="_blank">
                    INSTAGRAM
                    </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="footer-single-item-three">
              <p>
                We are digital agency that helps businesses develop immersive
                and engaging user experiences
              </p>
              <Link to="/contact-us" className="main-btn style-three">
                LET'S TALK WITH US
              </Link>
            </div>
          </div>
        </div>
        <div
          className="footer-menu d-flex justify-content-center justify-content-lg-between flex-wrap gap-3 gap-lg--4"
          data-cues="slideInUp"
        >
          <ul className="ps-0 mb-0 list-unstyled d-flex gap-2 gap-md-3">
            <li>
                <Link to="/about-us">About Company </Link>
            </li>
            <li>
                <Link to="/case-study">Our Case Study </Link>
            </li>
            <li>
                <Link to="/services">Our Services </Link>
            </li>
            <li>
                <Link to="/contact-us"> Contact Us</Link>
            </li>
          </ul>
          <ul className="ps-0 mb-0 list-unstyled d-flex gap-3 gap-md-4">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
        <p className="copyright">
          Copyright, <span>Stir</span> All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterThree;
