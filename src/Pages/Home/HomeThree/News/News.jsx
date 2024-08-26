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
              <a href="single-blog.html" className="d-block case-study-img">
                <img src={blog3} alt="blog" />
              </a>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <a href="blog.html">Branding</a>
                </li>
                <li>
                  <a href="blog.html">Development</a>
                </li>
                <li>
                  <a href="blog.html">Marketing</a>
                </li>
                <li>
                  <a href="blog.html">3 Minutes Read</a>
                </li>
              </ul>
              <h3>
                <a href="single-blog.html">
                  Improving user experience (UX) and user interface (UI) design
                  on websites, apps,
                </a>
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="case-study-single-item-three">
              <a href="single-blog.html" className="d-block case-study-img">
                <img src={blog4} alt="blog" />
              </a>
              <ul className="ps-0 list-unstyled d-flex flex-wrap gap-3 tags">
                <li>
                  <a href="blog.html">Branding</a>
                </li>
                <li>
                  <a href="blog.html">Development</a>
                </li>
                <li>
                  <a href="blog.html">Marketing</a>
                </li>
                <li>
                  <a href="blog.html">3 Minutes Read</a>
                </li>
              </ul>
              <h3>
                <a href="single-blog.html">
                  Creating chatbot solutions for websites and social media
                  platforms to automate customer,
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
