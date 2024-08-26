import blog1 from "../../../../assets/images/blog-1.jpg"
import blog2 from "../../../../assets/images/blog-2.jpg"
const UpdateBlog = () => {
  return (
    <div className="blog-area ptb-75">
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          data-cues="slideInUp"
        >
          <div className="col-xl-4 col-md-6">
            <div className="blog-info-content">
              <span className="top-title style-two">Update Blog</span>
              <h2>Our Recent News and Insights</h2>
              <p>
                Client satisfaction is at the heart of everything we do. We
                measure our success by the success of our clients. Therefore, we
                forge lasting...
              </p>
              <a href="blog.html" className="main-btn border-btn">
                Browse All Blog
                <i className="fa-regular fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-single-item">
              <a href="single-blog.html" className="d-block blog-img">
                <img src={blog1} alt="blog" />
              </a>
              <ul className="ps-0 list-unstyled date">
                <li>
                  <span>November 27, 2023</span>
                </li>
                <li>3 Minutes Read</li>
              </ul>
              <h3>
                <a href="single-blog.html">A Day in Fashion's Hidden Realms</a>
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-single-item">
              <a href="single-blog.html" className="d-block blog-img">
                <img src={blog2} alt="blog" />
              </a>
              <ul className="ps-0 list-unstyled date">
                <li>
                  <span>November 27, 2023</span>
                </li>
                <li>3 Minutes Read</li>
              </ul>
              <h3>
                <a href="single-blog.html">
                  A Wedding Photographer's Awesome Blog
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
