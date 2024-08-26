import caseStudy6 from "../../../../assets/images/case-study-6.jpg"
import caseStudy7 from "../../../../assets/images/case-study-7.jpg"
import caseStudy8 from "../../../../assets/images/case-study-8.jpg"
import caseStudy9 from "../../../../assets/images/case-study-9.jpg"
const BlogMarque = () => {
  return (
    <div className="marquee-area-three">
      <div className="container-fluid ptb-100">
        <div className="marquee-wrapper">
          <div className="marquee" data-cues="slideInUp">
            <h1>Our Latest</h1>
            <h1 className="block">Case</h1>
            <h1>Our Latest</h1>
            <h1>Our Latest</h1>
            <h1 className="block">Case</h1>
            <h1>Our Latest</h1>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row" data-cues="slideInUp">
          <div className="col-lg-6">
            <div className="case-study-single-item-three">
              <a
                href="cases-study-details.html"
                className="d-block case-study-img"
              >
                <img src={caseStudy6} alt="case-study" />
              </a>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <a href="case-study.html">Branding</a>
                </li>
                <li>
                  <a href="case-study.html">Development</a>
                </li>
                <li>
                  <a href="case-study.html">Marketing</a>
                </li>
              </ul>
              <h3>
                <a href="cases-study-details.html">
                  Creating high-quality video content, including promotional
                  videos, tutorials,
                </a>
              </h3>
              <a
                href="cases-study-details.html"
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </a>
            </div>
            <div className="case-study-single-item-three">
              <a
                href="cases-study-details.html"
                className="d-block case-study-img"
              >
                <img src={caseStudy8} alt="case-study" />
              </a>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <a href="case-study.html">Branding</a>
                </li>
                <li>
                  <a href="case-study.html">Development</a>
                </li>
                <li>
                  <a href="case-study.html">Marketing</a>
                </li>
              </ul>
              <h3>
                <a href="cases-study-details.html">
                  Optimizing online presence for local businesses, including
                  local SEO strategies,
                </a>
              </h3>
              <a
                href="cases-study-details.html"
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-100">
            <div className="case-study-single-item-three">
              <a
                href="cases-study-details.html"
                className="d-block case-study-img"
              >
                <img src={caseStudy7} alt="case-study" />
              </a>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <a href="case-study.html">Branding</a>
                </li>
                <li>
                  <a href="case-study.html">Development</a>
                </li>
                <li>
                  <a href="case-study.html">Marketing</a>
                </li>
              </ul>
              <h3>
                <a href="cases-study-details.html">
                  Collaborating with influential individuals or personalities on
                  social media,
                </a>
              </h3>
              <a
                href="cases-study-details.html"
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </a>
            </div>
            <div className="case-study-single-item-three">
              <a
                href="cases-study-details.html"
                className="d-block case-study-img"
              >
                <img src={caseStudy9} alt="case-study" />
              </a>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <a href="case-study.html">Branding</a>
                </li>
                <li>
                  <a href="case-study.html">Development</a>
                </li>
                <li>
                  <a href="case-study.html">Marketing</a>
                </li>
              </ul>
              <h3>
                <a href="cases-study-details.html">
                  Running targeted paid advertisements on social media platforms
                  to reach specific,
                </a>
              </h3>
              <a
                href="cases-study-details.html"
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMarque;
