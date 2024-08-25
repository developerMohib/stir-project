
import casestudy1 from "../../assets/images/case-study-1.jpg";
import casestudy2 from "../../assets/images/case-study-2.jpg";
import casestudy3 from "../../assets/images/case-study-3.jpg";
import casestudy4 from "../../assets/images/case-study-4.jpg";
import casestudy5 from "../../assets/images/case-study-5.jpg";

const CaseStudy = () => {
  return (
    <div>
      {/*=== Start Case Study Area ===*/}
      <div className="case-study-area overflow-hidden pb-100">
        <div className="container-fluid p-0">
          <div className="section-title" data-cues="slideInUp">
            <span className="top-title">Case Study</span>
            <h2>Real-World Solutions are Successful</h2>
          </div>
          <div className="case-study-content-wrap">
            <ul className="slider" data-cues="slideInUp">
              <li
                className="bg-img"
                style={{ backgroundImage: `url(${casestudy1})` }}
              >
                <h1>01</h1>
                <a href="cases-study-details.html">
                  <div className="case-study-content">
                    <span>Financial Advisory</span>
                    <div />
                    <h4>Assistance in Financial Planning</h4>
                  </div>
                </a>
              </li>
              <li
                className="bg-img"
                style={{ backgroundImage: `url(${casestudy2})` }}
              >
                <h1>02</h1>
                <a href="cases-study-details.html">
                  <div className="case-study-content">
                    <span>Financial Advisory</span>
                    <div />
                    <h4>Assistance in Financial Planning</h4>
                  </div>
                </a>
              </li>
              <li
                className="bg-img"
                style={{ backgroundImage: `url(${casestudy3})` }}
              >
                <h1>03</h1>
                <a href="cases-study-details.html">
                  <div className="case-study-content">
                    <span>Financial Advisory</span>
                    <div />
                    <h4>Assistance in Financial Planning</h4>
                  </div>
                </a>
              </li>
              <li
                className="bg-img"
                style={{ backgroundImage: `url(${casestudy4})` }}
              >
                <h1>04</h1>
                <a href="cases-study-details.html">
                  <div className="case-study-content">
                    <span>Financial Advisory</span>
                    <div />
                    <h4>Assistance in Financial Planning</h4>
                  </div>
                </a>
              </li>
              <li
                className="bg-img"
                style={{ backgroundImage: `url(${casestudy5})` }}
              >
                <h1>05</h1>
                <a href="cases-study-details.html">
                  <div className="case-study-content">
                    <span>Financial Advisory</span>
                    <div />
                    <h4>Assistance in Financial Planning</h4>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center" data-cues="slideInUp">
            <div className="d-inline-block">
              <a
                href="case-study.html"
                className="circle-btn d-inline-block text-decoration-none mt-4 mt-xl-5 d-flex align-items-center justify-content-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Case Study Area ===*/}
    </div>
  );
};

export default CaseStudy;
