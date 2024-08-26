import white_logo from "../../assets/images/white-logo.svg";
import { Link } from "react-router-dom";

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
                      <Link to="/" className="nav-link">
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
                      <Link to="/about-us" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/team" className="nav-link">
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/faq" className="nav-link">
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/testimonials" className="nav-link">
                        Testimonials
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link dropdown-toggle">
                        Authentication
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/sign-in" className="nav-link">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/sign-up" className="nav-link">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/privacy-policy" className="nav-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/terms-conditions" className="nav-link">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/404" className="nav-link active">
                        Error
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact-us" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Services </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/services" className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/service-details" className="nav-link">
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Case Study </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/case-study" className="nav-link">
                        Case Study
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/cases-study-details" className="nav-link">
                        Cases Study Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Shop </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/products" className="nav-link">
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/cart" className="nav-link">
                        Cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/checkout" className="nav-link">
                        Checkout
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/product-details" className="nav-link">
                        Product Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle"> Blog </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/blog" className="nav-link">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/single-blog" className="nav-link">
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
                    <option defaultValue>Language</option>
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
                      <i className="fa-brands fa-linkedin-in"></i>
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
              <Link to="/">
                <img src={white_logo} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Mobile Navbar Section ===*/}
    </div>
  );
};

export default Navbar;
