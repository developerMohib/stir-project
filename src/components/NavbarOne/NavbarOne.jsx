import { useEffect, useState } from "react";
import white_logo from "../../assets/images/white-logo.svg";
import { Link, useLocation } from "react-router-dom";

const NavbarOne = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-black">
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
                <li
                  className={`nav-item ${
                    location.pathname === "/" ||
                    location.pathname === "/home-2" ||
                    location.pathname === "/home-3"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nav-link dropdown-toggle">Home</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Creative Agency
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home-2" className="nav-link">
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
                <li
                  className={`nav-item ${
                    location.pathname.includes("/about-us") ||
                    location.pathname.includes("/team") ||
                    location.pathname.includes("/faq") ||
                    location.pathname.includes("/testimonials") ||
                    location.pathname.includes("/sign-in") ||
                    location.pathname.includes("/sign-up") ||
                    location.pathname.includes("/privacy-policy") ||
                    location.pathname.includes("/terms-conditions") ||
                    location.pathname.includes("/404") ||
                    location.pathname.includes("/contact-us")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nav-link dropdown-toggle">Pages</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/about-us"
                        className={`nav-link ${
                          location.pathname === "/about-us" ? "active" : ""
                        }`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/team"
                        className={`nav-link ${
                          location.pathname === "/team" ? "active" : ""
                        }`}
                      >
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/faq"
                        className={`nav-link ${
                          location.pathname === "/faq" ? "active" : ""
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/testimonials"
                        className={`nav-link ${
                          location.pathname === "/testimonials" ? "active" : ""
                        }`}
                      >
                        Testimonials
                      </Link>
                    </li>

                    <li
                      className={`nav-item dropdown ${
                        location.pathname === "/sign-in" ||
                        location.pathname === "/sign-up"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Authentication
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="/sign-in"
                            className={`nav-link ${
                              location.pathname === "/sign-in" ? "active" : ""
                            }`}
                          >
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/sign-up"
                            className={`nav-link ${
                              location.pathname === "/sign-up" ? "active" : ""
                            }`}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/privacy-policy"
                        className={`nav-link ${
                          location.pathname === "/privacy-policy"
                            ? "active"
                            : ""
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/terms-conditions"
                        className={`nav-link ${
                          location.pathname === "/terms-conditions"
                            ? "active"
                            : ""
                        }`}
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/404"
                        className={`nav-link ${
                          location.pathname === "/404" ? "active" : ""
                        }`}
                      >
                        Error
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contact-us"
                        className={`nav-link ${
                          location.pathname === "/contact-us" ? "active" : ""
                        }`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname.includes("/services") ||
                    location.pathname.includes("/service-details")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nav-link dropdown-toggle">Services</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/services"
                        className={`nav-link ${
                          location.pathname === "/services" ? "active" : ""
                        }`}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/service-details"
                        className={`nav-link ${
                          location.pathname === "/service-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname.includes("/case-study") ||
                    location.pathname.includes("/cases-study-details")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nav-link dropdown-toggle">Case Study</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/case-study"
                        className={`nav-link ${
                          location.pathname === "/case-study" ? "active" : ""
                        }`}
                      >
                        Case Study
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/cases-study-details"
                        className={`nav-link ${
                          location.pathname === "/cases-study-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        Cases Study Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname.includes("/products") ||
                    location.pathname.includes("/cart") ||
                    location.pathname.includes("/checkout") ||
                    location.pathname.includes("/product-details")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nav-link dropdown-toggle">Shop</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/products"
                        className={`nav-link ${
                          location.pathname === "/products" ? "active" : ""
                        }`}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/cart"
                        className={`nav-link ${
                          location.pathname === "/cart" ? "active" : ""
                        }`}
                      >
                        Cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/checkout"
                        className={`nav-link ${
                          location.pathname === "/checkout" ? "active" : ""
                        }`}
                      >
                        Checkout
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/product-details"
                        className={`nav-link ${
                          location.pathname === "/product-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        Product Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname.includes("/blog") ||
                    location.pathname.includes("/single-blog")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nav-link dropdown-toggle">Blog</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/blog"
                        className={`nav-link ${
                          location.pathname === "/blog" ? "active" : ""
                        }`}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/single-blog"
                        className={`nav-link ${
                          location.pathname === "/single-blog" ? "active" : ""
                        }`}
                      >
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
                      <i className="fa-brands fa-linkedin" />
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
              <a href="">
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

export default NavbarOne;
