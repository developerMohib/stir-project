import BreadCump from "../../components/BreadCump/BreadCump";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import blogdetails from "../../assets/images/blog-details-img.jpg";
import quoteSvg from "../../assets/images/quote.svg";
import blogimg12 from "../../assets/images/blog-12.jpg";
import blogimg13 from "../../assets/images/blog-13.jpg";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Blog Details"} />
      {/* Start Blog Details Area */}

      <div className="blog-details-area pt-100">
        <div className="container">
          <div className="blog-details-content">
            <div className="blog-details-img">
              <img src={blogdetails} alt="blog-details-img" />
            </div>
            <h2>
              A Day in Fashion s Hidden Realms, A Behind-the-Scenes Look at
              Creative Processes
            </h2>
            <p>
              <span>W</span> elcome readers to an exclusive journey behind the
              scenes of the fashion world. Explore the concealed aspects of the
              industry that contribute to the glamour and innovation we see on
              the runway. Unveiling the heart of fashion – step inside design
              studios to witness the artistic process. From concept sketches to
              material selection, discover how ideas evolve into stunning
              garments. Get an insider s view of model casting sessions and
              fittings. Learn how designers collaborate with models to bring
              their creations to life, ensuring a perfect match between the
              garment and the wearer. Dive into the transformative world of
              fashion styling and makeup. Explore the creativity and precision
              required to enhance a model s appearance, aligning with the
              designer s vision.
            </p>
            <p>
              Follow our journey to an actual fashion photoshoot. From scouting
              locations to capturing the perfect shot, witness the meticulous
              planning and execution that goes into creating compelling imagery.
              Explore the manufacturing side of the fashion industry. From
              cutting-edge technology to skilled craftsmanship, understand how
              fabrics are transformed into exquisite garments on a large scale.
              Experience the excitement and chaos of a fashion show rehearsal.
            </p>
            <div className="mb-60" />
            <blockquote>
              <img src={quoteSvg} alt="quat" />
              <p>
                Delve into the role of technology in the fashion industry. From
                virtual fittings to AI-driven trend analysis, discover how
                digital innovations are reshaping the way fashion is created and
                consumed.
              </p>
              <span>Park Smith</span>
            </blockquote>
            <div className="mb-60" />
            <div className="row">
              <div className="col-g-6 col-sm-6">
                <div className="blog-img mb-4 mb-sm-0">
                  <img src={blogimg12} alt="blog" />
                </div>
              </div>
              <div className="col-g-6 col-sm-6">
                <div className="blog-img">
                  <img src={blogimg13} alt="blog" />
                </div>
              </div>
            </div>
            <div className="mb-60" />
            <h2>Behind-the-Scenes of a Photoshoot</h2>
            <p>
              Follow our journey to an actual fashion photoshoot. From scouting
              locations to capturing the perfect shot, witness the meticulous
              planning and execution that goes into creating compelling imagery.
              Explore the manufacturing side of the fashion industry. From
              cutting-edge technology to skilled craftsmanship, understand how
              fabrics are transformed into exquisite garments on a large scale.
              Experience the excitement and chaos of a fashion show rehearsal.
              Witness models, designers, and crew coming together to ensure a
              flawless presentation on the runway. Delve into the role of
              technology in the fashion industry. From virtual fittings to
              AI-driven trend analysis, discover how digital innovations are
              reshaping the way fashion is created and consumed.
            </p>
            <p>
              Explore the manufacturing side of the fashion industry. From
              cutting-edge technology to skilled craftsmanship, understand how
              fabrics are transformed into exquisite garments on a large scale.
              Experience the excitement and chaos of a fashion show rehearsal.
              Witness models, designers, and crew coming together to ensure a
              flawless presentation on the runway. Delve into the role of
              technology in the fashion industry. From virtual fittings to
              AI-driven trend analysis, discover how digital innovations are
              reshaping the way fashion is created and{" "}
            </p>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 tags-share">
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 tags-list align-items-center">
                <li>
                  <span>Tags:</span>
                </li>
                <li>
                  <Link to="/blog">Design</Link>
                </li>
                <li>
                  <Link to="/blog">Development</Link>
                </li>
                <li>
                  <Link to="/blog">Planning</Link>
                </li>
                <li>
                  <Link to="/blog">Marketing</Link>
                </li>
              </ul>
              <ul className="ps-0 mb-0 list-unstyled d-flex social-list align-items-center gap-3">
                <li>
                  <span>Share:</span>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="_blank">
                    <i className="fa-brands fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details Area */}

      {/*=== Start Post A Comment Area ===*/}
      <div className="post-a-comment-area pb-100">
        <div className="container">
          <div className="section-title text-start ms-0">
            <h2>Post A Comment</h2>
          </div>
          <form className="post-a-comment">
            <div className="row">
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
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea
                    cols={30}
                    rows={6}
                    className="form-control"
                    placeholder="Message *"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="circle-btn d-inline-block text-decoration-none bg-transparent d-flex align-items-center"
                >
                  <span>Send Message</span>
                  <i className="fa-solid fa-arrow-up-right" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*=== End Post A Comment Area ===*/}
    </div>
  );
};

export default SingleBlog;
