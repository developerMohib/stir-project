import { Link } from "react-router-dom";
import blog3 from "../../../../assets/images/blog-3.jpg"
import blog4 from "../../../../assets/images/blog-4.jpg"
const News = () => {
  return (
    <div className="marquee-area-three">
      <div className="container-fluid ptb-100">
        <div className="marquee-wrapper">
          <div className="marquee" data-cues="slideInUp">
            <h1>Our Latest</h1>
            <h1 className="block">Articles</h1>
            <h1>and News</h1>
            <h1>Our Latest</h1>
            <h1 className="block">Articles</h1>
            <h1>and News</h1>
          </div>
        </div>
      </div>      
      <div className="container">
        <div className="row justify-content-center" data-cues="slideInUp">
          <div className="col-lg-6">
            <div className="case-study-single-item-three">
              <Link to="/single-blog" className="d-block case-study-img">
                <img src={blog3} alt="blog" />
              </Link>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <Link to="/blog">Branding</Link>
                </li>
                <li>
                  <Link to="/blog">Development</Link>
                </li>
                <li>
                  <Link to="/blog">Marketing</Link>
                </li>
                <li>
                  <Link to="/blog">3 Minutes Read</Link>
                </li>
              </ul>
              <h3>
                <Link to="/single-blog">
                  Improving user experience (UX) and user interface (UI) design
                  on websites, apps,
                </Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="case-study-single-item-three">
              <Link to="/single-blog" className="d-block case-study-img">
                <img src={blog4} alt="blog" />
              </Link>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <Link to="/blog">Branding</Link>
                </li>
                <li>
                  <Link to="/blog">Development</Link>
                </li>
                <li>
                  <Link to="/blog">Marketing</Link>
                </li>
                <li>
                  <Link to="/blog">3 Minutes Read</Link>
                </li>
              </ul>
              <h3>
                <Link to="/single-blog">
                  Creating chatbot solutions for websites and social media
                  platforms to automate customer,
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
