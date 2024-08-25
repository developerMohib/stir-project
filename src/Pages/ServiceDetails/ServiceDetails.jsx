import BreadCump from "../../components/BreadCump/BreadCump";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import serviceDetailsImg from "../../assets/images/services-img-1.jpg";
import serviceImg1 from "../../assets/images/services-img-1.jpg";
import serviceSvg from "../../assets/images/services-icon-1.svg";
import serviceSvg1 from "../../assets/images/services-icon-2.svg";

const ServiceDetails = () => {
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Service Details"} />
      {/*=== Start Services Area ===*/}
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className={serviceDetailsImg}>
                  <img src={serviceImg1} alt="services-img" />
                </div>
                <h2>Strategy Consulting</h2>
                <p>
                  Creating high-quality video content, including promotional
                  videos tutorials and advertisements &amp; utilizing them part
                  of digital marketing campaigns across various platforms.
                  Collaborating with influential individuals or personalities on
                  social media to promote products/services and reach a wider
                  audience.
                </p>
                <p>
                  Consultancy agencies offer expert advice, guidance, and
                  solutions to businesses seeking improvement in specific areas
                  such as management finance technology or operations. These
                  agencies leverage their industry knowledge and experience to
                  assist companies in optimizing processes.
                </p>
                <p>
                  A marketing agency is a dedicated entity that strategizes,
                  plans, and executes marketing campaigns for businesses to
                  enhance brand visibility, attract customers &amp; drive sales.
                  These agencies employ various tools and channels, including
                  digital platforms, social media, content creation, and
                  advertising.
                </p>
                <div className="mb-30" />
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-xl-6">
                    <div className="services-single-item style-two">
                      <div className="d-sm-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="icon">
                            <img src={serviceSvg} alt="services-icon" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-sm-3">
                          <h3>
                            <a href="service-details.html">
                              Strategy Consulting
                            </a>
                          </h3>
                          <p className="border-0 p-0 m-0">
                            Expert guidance in formulating and growth.
                          </p>
                        </div>
                      </div>
                      <ul className="ps-0 mb-0 list-unstyled border-top">
                        <li>Product Management</li>
                        <li>Financial Advisory</li>
                        <li>Product Strategy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="services-single-item style-two">
                      <div className="d-sm-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="icon">
                            <img src={serviceSvg1} alt="services-icon" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-sm-3">
                          <h3>
                            <a href="service-details.html">Digital Marketing</a>
                          </h3>
                          <p className="border-0 p-0 m-0">
                            Expert guidance in formulating and growth.
                          </p>
                        </div>
                      </div>
                      <ul className="ps-0 mb-0 list-unstyled border-top">
                        <li>Marketing Strategies</li>
                        <li>Business Development</li>
                        <li>Financial Advisory</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  A marketing agency is a dedicated entity that strategizes,
                  plans, and executes marketing campaigns for businesses to
                  enhance brand visibility, attract customers &amp; drive sales.
                  These agencies employ various tools and channels, including
                  digital platforms, social media, content creation, and
                  advertising.
                </p>
                <div className="mb-30 pb-md-4" />
                <h2>Some Basic Questions</h2>
                <div className="mb-30" />
                <div
                  className="accordion accordion-content"
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span className="d-sm-flex align-items-center">
                          <span className="flex-shrink-0">
                            <span className="count">01</span>
                          </span>
                          <span className="flex-grow-1 mt-3 mt-sm-0">
                            <span>
                              What is the difference between creative agency and
                              marketing agency?
                            </span>
                          </span>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Your success is our priority. We measure our
                          achievements by the success stories of our clients.
                          Through seamless communication, meticulous attention
                          to detail, and a passion for perfection, we strive to
                          exceed your expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span className="d-sm-flex align-items-center">
                          <span className="flex-shrink-0">
                            <span className="count">02</span>
                          </span>
                          <span className="flex-grow-1 mt-3 mt-sm-0">
                            <span>
                              What is the difference between media and creative
                              agency?
                            </span>
                          </span>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Your success is our priority. We measure our
                          achievements by the success stories of our clients.
                          Through seamless communication, meticulous attention
                          to detail, and a passion for perfection, we strive to
                          exceed your expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span className="d-sm-flex align-items-center">
                          <span className="flex-shrink-0">
                            <span className="count">03</span>
                          </span>
                          <span className="flex-grow-1 mt-3 mt-sm-0">
                            <span>
                              What is the difference between media and creative
                              agency?
                            </span>
                          </span>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Your success is our priority. We measure our
                          achievements by the success stories of our clients.
                          Through seamless communication, meticulous attention
                          to detail, and a passion for perfection, we strive to
                          exceed your expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span className="d-sm-flex align-items-center">
                          <span className="flex-shrink-0">
                            <span className="count">04</span>
                          </span>
                          <span className="flex-grow-1 mt-3 mt-sm-0">
                            <span>
                              What is the difference between creative agency and
                              studio?
                            </span>
                          </span>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Your success is our priority. We measure our
                          achievements by the success stories of our clients.
                          Through seamless communication, meticulous attention
                          to detail, and a passion for perfection, we strive to
                          exceed your expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span className="d-sm-flex align-items-center">
                          <span className="flex-shrink-0">
                            <span className="count">05</span>
                          </span>
                          <span className="flex-grow-1 mt-3 mt-sm-0">
                            <span>
                              Who is responsible for the creative product of an
                              agency?
                            </span>
                          </span>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Your success is our priority. We measure our
                          achievements by the success stories of our clients.
                          Through seamless communication, meticulous attention
                          to detail, and a passion for perfection, we strive to
                          exceed your expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget mt-5 mt-lg-0">
                <div className="mb-5">
                  <h3>Search Now</h3>
                  <form className="src-form position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here....."
                    />
                    <button
                      type="submit"
                      className="src-btn position-absolute top-50 end-0 translate-middle-y"
                    >
                      <i className="fa-regular fa-magnifying-glass" />
                    </button>
                  </form>
                </div>
                <div className="mb-5">
                  <h3>Service List</h3>
                  <ul className="ps-0 mb-0 list-unstyled service-list">
                    <li>
                      <a href="services.html">01 Strategy Consulting</a>
                    </li>
                    <li>
                      <a href="services.html">02 Digital Marketing</a>
                    </li>
                    <li>
                      <a href="services.html">03 Web Development</a>
                    </li>
                    <li>
                      <a href="services.html">04 Creative Design</a>
                    </li>
                    <li>
                      <a href="services.html">05 Business Strategy</a>
                    </li>
                    <li>
                      <a href="services.html">06 Website Design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Services Area ===*/}
    </div>
  );
};

export default ServiceDetails;
