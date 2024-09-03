import { Link } from "react-router-dom";
import caseStudy6 from "../../assets/images/case-study-6.jpg"
import caseStudy7 from "../../assets/images/case-study-7.jpg"
import caseStudy8 from "../../assets/images/case-study-8.jpg"
import caseStudy9 from "../../assets/images/case-study-9.jpg"
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
              <Link
                to="/cases-study-details"
                className="d-block case-study-img"
              >
                <img src={caseStudy6} alt="case-study" />
              </Link>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <Link to="/case-study ">Branding</Link>
                </li>
                <li>
                  <Link to="/case-study ">Development</Link>
                </li>
                <li>
                  <Link to="/case-study ">Marketing</Link>
                </li>
              </ul>
              <h3>
                <Link to="/cases-study-details ">
                  Creating high-quality video content, including promotional
                  videos, tutorials,
                </Link>
              </h3>
              <Link
                to="/cases-study-details "
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </Link>
            </div>
            <div className="case-study-single-item-three">
              <Link
                to="/cases-study-details "
                className="d-block case-study-img"
              >
                <img src={caseStudy8} alt="case-study" />
              </Link>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <Link to="/case-study ">Branding</Link>
                </li>
                <li>
                  <Link to="/case-study ">Development</Link>
                </li>
                <li>
                  <Link to="/case-study ">Marketing</Link>
                </li>
              </ul>
              <h3>
                <Link to="/cases-study-details ">
                  Optimizing online presence for local businesses, including
                  local SEO strategies,
                </Link>
              </h3>
              <Link
                to="/cases-study-details "
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mt-100">
            <div className="case-study-single-item-three">
              <Link
                to="/cases-study-details "
                className="d-block case-study-img"
              >
                <img src={caseStudy7} alt="case-study" />
              </Link>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <Link to="/case-study ">Branding</Link>
                </li>
                <li>
                  <Link to="/case-study ">Development</Link>
                </li>
                <li>
                  <Link to="/case-study ">Marketing</Link>
                </li>
              </ul>
              <h3>
                <Link to="/cases-study-details ">
                  Collaborating with influential individuals or personalities on
                  social media,
                </Link>
              </h3>
              <Link
                to="/cases-study-details "
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </Link>
            </div>
            <div className="case-study-single-item-three">
              <Link
                to="/cases-study-details "
                className="d-block case-study-img"
              >
                <img src={caseStudy9} alt="case-study" />
              </Link>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <Link to="/case-study ">Branding</Link>
                </li>
                <li>
                  <Link to="/case-study ">Development</Link>
                </li>
                <li>
                  <Link to="/case-study ">Marketing</Link>
                </li>
              </ul>
              <h3>
                <Link to="/cases-study-details ">
                  Running targeted paid advertisements on social media platforms
                  to reach specific,
                </Link>
              </h3>
              <Link
                to="/cases-study-details "
                className="circle-btn d-inline-block text-decoration-none d-flex align-items-center"
              >
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-up-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMarque;
