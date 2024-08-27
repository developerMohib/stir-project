import { useEffect, useState } from "react";
import white_logo from "../../assets/images/white-logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-area bg-black ${isSticky ? 'is-sticky' : ''}`}>
    {/*=== Start Main Navbar Section ===*/}
    <div className="main-nav">
      <div className="container mw-1680">
        <nav className="navbar navbar-expand-md navbar-light">
          <NavLink className="navbar-brand" to="/">
            <img src={white_logo} alt="logo" />
          </NavLink>
          <div
            className="collapse navbar-collapse for-mobile-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link dropdown-toggle" to="/">
                  Home
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Creative Agency
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home-2" className="nav-link">
                      Business Agency
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home-3" className="nav-link">
                      Digital Agency
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dropdown-toggle" to="/about-us">
                  Pages
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink to="/about-us" className="nav-link">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/team" className="nav-link">
                      Team
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/faq" className="nav-link">
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/testimonials" className="nav-link">
                      Testimonials
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign-in" className="nav-link">
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign-up" className="nav-link">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/privacy-policy" className="nav-link">
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/terms-conditions" className="nav-link">
                      Terms &amp; Conditions
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/404" className="nav-link">
                      Error
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact-us" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dropdown-toggle" to="/services">
                  Services
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink to="/services" className="nav-link">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/service-details" className="nav-link">
                      Service Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dropdown-toggle" to="/case-study">
                  Case Study
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink to="/case-study" className="nav-link">
                      Case Study
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/cases-study-details" className="nav-link">
                      Cases Study Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dropdown-toggle" to="/products">
                  Shop
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink to="/products" className="nav-link">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/cart" className="nav-link">
                      Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/checkout" className="nav-link">
                      Checkout
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/product-details" className="nav-link">
                      Product Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dropdown-toggle" to="/blog">
                  Blog
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink to="/blog" className="nav-link">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/single-blog" className="nav-link">
                      Single Blog Page
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="nav-right-options d-flex align-items-center">
              <div className="language position-relative z-1">
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue>Language</option>
                  <option value={1}>English</option>
                  <option value={2}>Arabic</option>
                  <option value={3}>China</option>
                </select>
                <i className="fa-light fa-globe" />
              </div>
              <ul className="social-link ps-0 mb-0 list-unstyled">
                <li>
                  <NavLink to="https://facebook.com/" target="_blank">
                    {" "}
                    <i className="fa-brands fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </NavLink>
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
            <NavLink to="/">
              <img src={white_logo} alt="logo" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    {/*=== End Mobile Navbar Section ===*/}
  </div>
  
  );
};

export default Navbar;
