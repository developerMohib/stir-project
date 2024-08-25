import BreadCump from "../../components/BreadCump/BreadCump";
import shapeBg from "../../assets/images/banner-bg-shape.png";
const ContactUs = () => {
  return (
    <>
      <BreadCump bgImg={shapeBg} pageName={"Contac Us"} />

      <div>
        {/*=== Start Contact Us Area ===*/}
        <div className="contact-us-main-area ptb-100">
          <div className="container">
            <div className="contact-us-main-form">
              <h3>Sent A Message</h3>
              <div className="row">
                <div className="col-lg-8 col-xl-9">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-4">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-4">
                          <textarea
                            className="form-control"
                            placeholder="Write your message here..."
                            cols={30}
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-0">
                          <button className="main-btn" type="submit">
                            Send A Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4 col-xl-3">
                  <div className="contact-info">
                    <h3>Find us Here</h3>
                    <ul className="ps-0 mb-0 list-unstyled info-list">
                      <li>
                        <span>Address:</span>
                        Australia Wise 9297 Maxim AV. Antonio, USA.
                      </li>
                      <li>
                        <span>Phone:</span>
                        <a href="tel:+52883256953129">+5288 32569 53129</a>
                      </li>
                      <li>
                        <span>Phone:</span>
                        <a href="mailto:information@stir.com">
                          information@stir.com
                        </a>
                      </li>
                      <li>
                        <span>Phone:</span>
                        <a href="mailto:information@stir.com">
                          information@stir.com
                        </a>
                      </li>
                    </ul>
                    <h3>Opening Hours:</h3>
                    <p>Mon to Sat: 9am - 10pm Sun: 10am - 6pm</p>
                    <div className="social-link d-flex">
                      <span>Social Media:</span>
                      <div className="d-flex gap-3">
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="fa-brands fa-twitter" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank">
                          <i className="fa-brands fa-pinterest-p" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== End Contact Us Area ===*/}
        {/*=== Start Map Area ===*/}
        <div className="map-area pb-100">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29733962.5709096!2d111.88697805211767!3d-24.532740314506096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sbd!4v1711220009595!5m2!1sen!2sbd"
              style={{
                width: "100%",
                height: 600,
                border: 0,
                display: "block",
              }}
            />
          </div>
        </div>
        {/*=== End Map Area ===*/}
      </div>
    </>
  );
};

export default ContactUs;
