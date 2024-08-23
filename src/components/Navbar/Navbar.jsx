import "bootstrap/dist/css/bootstrap.min.css";
import white_logo from "../../assets/images/white-logo.svg";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar-area bg-black">
      {/*=== Start Main Navbar Section ===*/}
      <div className="main-nav">
        <div className="container mw-1680">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={white_logo} alt="logo" />
            </Link>
            <div
              className="collapse navbar-collapse for-mobile-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle "> Home </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/home-1" className="nav-link">
                        Creative Agency
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home-2" className="nav-link">
                        {" "}
                        Business Agency
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home-3" className="nav-link">
                        Digital Agency
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle active">Pages</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/about-us.html" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="team.html" className="nav-link">
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="faq.html" className="nav-link">
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="testimonials.html" className="nav-link">
                        Testimonials
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link dropdown-toggle">
                        Authentication
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="sign-in.html" className="nav-link">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="sign-up.html" className="nav-link">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="privacy-policy.html" className="nav-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="terms-conditions.html" className="nav-link">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="404.html" className="nav-link active">
                        Error
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="contact-us.html" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Services </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="services.html" className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="service-details.html" className="nav-link">
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Case Study </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="case-study.html" className="nav-link">
                        Case Study
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="cases-study-details.html"
                        className="nav-link"
                      >
                        Cases Study Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Shop </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="products.html" className="nav-link">
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="cart.html" className="nav-link">
                        Cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="checkout.html" className="nav-link">
                        Checkout
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="product-details.html" className="nav-link">
                        Product Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Blog </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="blog.html" className="nav-link">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="single-blog.html" className="nav-link">
                        Single Blog Page
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="nav-right-options d-flex align-items-center">
                <div className="language position-relative z-1">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue >Language</option>
                    <option value={1}>English</option>
                    <option value={2}>Arabic</option>
                    <option value={3}>China</option>
                  </select>
                  <i className="fa-light fa-globe" />
                </div>
                <ul className="social-link ps-0 mb-0 list-unstyled">
                  <li>
                    <Link to="https://facebook.com/" target="_blank">
                      {" "}
                      <FontAwesomeIcon icon={faFacebookF} />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/" target="_blank">
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://instagram.com/" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://linkedin.com/" target="_blank">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/*=== End Main Navbar Section ===*/}
      {/*=== Start Mobile Navbar Section ===*/}
      <div className="mobile-nav">
        <div className="container">
          <div className="mobile-menu">
            <div className="logo">
              <a href="index.html">
                <img src={white_logo} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Mobile Navbar Section ===*/}
    </div>
  );
};

export default Navbar;
