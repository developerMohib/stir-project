
import bgImg from "../../assets/images/get-in-bg.jpg"
const Subscription = () => {
  return (
    <div
      className="subscribe-newsletter-area bg-img"
     style={{backgroundImage : `url(${bgImg})`}}
    >
      <div className="container">
        <div className="row align-items-center" data-cues="slideInUp">
          <div className="col-lg-6">
            <div className="subscribe-newsletter-content">
              <span className="top-title style-two">Subscribe Newsletter</span>
              <h2>Subscribe to Our Newsletter &amp; Join Our Community</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="subscribe-newsletter-form">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mail address"
              />
              <button type="submit" className="main-btn border-btn">
                <span>Join Us Now</span>
                <i className="fa-solid fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
