import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import blackLogo from "../../assets/images/black-logo.svg";
const NavbarThree = () => {
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
    <div className={`navbar-area style-three ${isSticky ? "is-sticky" : ""}`}>
      <div>
        {/*=== Start Main Navbar Section ===*/}
        <div className="main-nav">
          <div className="container mw-1680">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img src={blackLogo} alt="logo" />
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
                            location.pathname === "/testimonials"
                              ? "active"
                              : ""
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
                  <ul className="social-link ps-0 mb-0 list-unstyled">
                    <li>
                      <a href="https://facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    className="src-btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                  >
                    <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                  </button>
                  <button
                    className="menu-btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <i className="fa-regular fa-bars"></i>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/*=== End Main Navbar Section ===*/}
      </div>
      {/*=== Start Search Area ===*/}
      <div
        className="offcanvas offcanvas-top search-offcanvas"
        tabIndex={-1}
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="container">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasTopLabel">
              Search Here
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <form className="src-form position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search Here"
              />
              <button
                type="submit"
                className="position-absolute top-50 end-0 translate-middle-y src-btn"
              >
                <i className="fa-regular fa-magnifying-glass" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*=== End Search Area ===*/}
      {/*=== Start Contact Us Area ===*/}
      <div
        className="offcanvas offcanvas-end contact-offcanvas"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Contact Us
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <form>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone No"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                className="form-control"
                placeholder="Your Messages"
                cols={30}
                rows={5}
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="main-btn style-three">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*=== End Contact Us Area ===*/}
    </div>
  );
};

export default NavbarThree;
