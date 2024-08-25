
const Contact = () => {
  return (
    <div>
      {/*=== Start Contact Us Area ===*/}
      <div className="contact-us-area bg-color-030303 ptb-100">
        <div className="container">
          <div className="section-title white-title" data-cues="slideInUp">
            <span className="top-title">Appointment</span>
            <h2>Love to Hear from You Get in Touch!</h2>
          </div>
          <form className="appointment-form">
            <div className="row" data-cues="slideInUp">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What you are interested *"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Budget *"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Message *"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="services-btn d-inline-block">
                  <button
                    type="submit"
                    className="circle-btn text-decoration-none d-flex align-items-center bg-transparent"
                  >
                    <span>Send Message</span>
                    <i className="fa-solid fa-arrow-up-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*=== End Contact Us Area ===*/}
    </div>
  );
};

export default Contact;
