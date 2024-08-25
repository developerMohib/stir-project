import white_logo from "../../assets/images/white-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/*=== Start Footer Area ===*/}
      <div className="footer-area pt-100 pb-75 bg-color-030303">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-single-item style-three">
                <a href="index.html" className="logo">
                  <img src={white_logo} alt="white-logo" />
                </a>
                <p>
                  Join us on a journey where creativity knows no bounds and
                  innovation thrives. Contact [Stir] today,
                </p>
                <ul className="social-link ps-0 mb-0 list-unstyled">
                  <li>
                    <Link to="https://facebook.com/" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/" target="_blank">
										<i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://instagram.com/" target="_blank">                      
										<i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://linkedin.com/" target="_blank">
                     <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-single-item style-three ms-lg-5">
                <h3>Useful Links</h3>
                <ul className="useful-link">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="case-study.html">Case Study</a>
                  </li>
                  <li>
                    <a href="services.html">Our Service</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-single-item style-three">
                <h3>Contact Us</h3>
                <p className="mb-3">Samwell Street, Trankturt 2589 New York.</p>
                <ul className="contact-info ms-0">
                  <li>
                    <a href="mailto:information@stir.com">
                      information@stir.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+52883256953129">+5288 32569 53129</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-single-item style-three">
                <h3>Subscribe Us</h3>
                <p>
                  Subscribe to our newsletter for future updates. don’t worry we
                  don’t spam your email address
                </p>
                <form className="position-relative z-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="p-0 bg-transparent border-0 send-btn position-absolute top-50 end-0 translate-middle-y"
                  >
                    <i className="fa-light fa-paper-plane-top"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Footer Area ===*/}
      {/*=== Start CopyRight Area ===*/}
      <div className="bg-color-030303">
        <div className="container">
          <p className="copy-right style-three">
            Copyright, <span>Stir</span> All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
