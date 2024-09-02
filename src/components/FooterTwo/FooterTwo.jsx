import { Link } from "react-router-dom";
import logo2 from "../../assets/images/white-logo-2.svg";
const FooterTwo = () => {
  return (
    <div>
      {/*=== Start Footer Area ===*/}
      <div className="footer-area bg-color-030303 pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4" data-cues="slideInUp">
              <div className="footer-single-item style-two">
                <a href="" className="logo">
                  <img src={logo2} alt="white-logo" />
                </a>
                <p>
                  Join us on a journey where creativity knows no bounds and
                  innovation thrives. Contact [Stir] today, &amp; let's
                  collaborate to bring your vision to life.
                </p>
                <ul className="social-link ps-0 mb-0 list-unstyled">
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row" data-cues="slideInUp">
                <div className="col-lg-4 col-sm-6">
                  <div className="footer-single-item style-two">
                    <h3>Our Services</h3>
                    <ul className="useful-link">
                      <li>
                        <Link to="/services">Strategic Consulting</Link>
                      </li>
                      <li>
                        <Link to="/services">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="/services">Brand Development</Link>
                      </li>
                      <li>
                        <Link to="/services">Financial Advisory</Link>
                      </li>
                      <li>
                        <Link to="/</li>services">Technology Solutions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="footer-single-item style-two">
                    <h3>Our Services</h3>
                    <ul className="useful-link">
                      <li>
                        <Link to="/services">Strategic Consulting</Link>
                      </li>
                      <li>
                        <Link to="/services">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="/services">Brand Development</Link>
                      </li>
                      <li>
                        <Link to="/services">Financial Advisory</Link>
                      </li>
                      <li>
                        <Link to="/services">Technology Solutions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="footer-single-item style-two">
                    <h3>Contact Us</h3>
                    <ul className="contact-info ms-0">
                      <li>
                        <i className="fa-regular fa-location-dot" />
                        <span>Samwell Street, Trankturt 2589 New York.</span>
                      </li>
                      <li>
                        <i className="fa-regular fa-headphones" />
                        <a href="tel:+52883256953129">+5288 32569 53129</a>
                      </li>
                      <li>
                        <i className="fa-regular fa-envelope" />
                        <a href="mailto:information@stir.com">
                          information@stir.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Footer Area ===*/}
      {/*=== Start CopyRight Area ===*/}
      <div className="copyright-area">
        <div className="container">
          <p className="copy-right style-two">
            Copyright, <span>Stir</span> All Rights Reserved
          </p>
        </div>
      </div>
      {/*=== End CopyRight Area ===*/}
    </div>
  );
};

export default FooterTwo;
