import whoWeare from "../../assets/images/who-we-are-img.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";


const WhoWe = () => {
  return (
    <div>
      {/*=== Start Who We Are Area ===*/}
      <div className="who-we-are-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-we-are-content" data-cues="slideInUp">
                <span className="top-title">Who We Are</span>
                <h2>Best Value Service Provider Creative Agency</h2>
                <p>
                  Established with a vision to redefine the art of storytelling
                  &amp; design, we have been at the forefront of delivering
                  groundbreaking creative solutions since our inception. Our
                  agency is a dynamic powerhouse of talent, merging artistic
                  flair with strategic acumen to bring visions to life.
                </p>
                <div className="all-skill-bar">
                  <div className="skill-bar" data-percentage="75%">
                    <h4 className="progress-title-holder">
                      <span className="progress-title">Digital Marketing</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content" />
                    </div>
                  </div>
                  <div className="skill-bar" data-percentage="85%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">Brand Strategy</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content" />
                    </div>
                  </div>
                  <div className="skill-bar" data-percentage="95%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">
                        Competitor Analysis
                      </span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content" />
                    </div>
                  </div>
                </div>
                <div className="d-inline-block">
                  <a
                    href="about-us.html"
                    className="circle-btn d-inline-block text-decoration-none mt-4 mt-xl-5 d-flex align-items-center"
                  >
                    <span>Learn More</span>
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-we-are-img" data-cues="slideInUp">
                <img
                  src={whoWeare}
                  alt="who-we-are-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Who We Are Area ===*/}
    </div>
  );
};

export default WhoWe;
