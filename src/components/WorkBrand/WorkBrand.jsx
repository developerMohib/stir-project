import brand1 from "../../assets/images/brands-1.png";
import brand2 from "../../assets/images/brands-2.png";
import brand3 from "../../assets/images/brands-3.png";
import brand4 from "../../assets/images/brands-4.png";
import brand5 from "../../assets/images/brands-5.png";
import brand6 from "../../assets/images/brands-6.png";
import brand7 from "../../assets/images/brands-7.png";
import brand8 from "../../assets/images/brands-8.png";
import brand9 from "../../assets/images/brands-9.png";
import brand10 from "../../assets/images/brands-10.png";
import aboutUs from "../../assets/images/about-us.png"
import { Link } from "react-router-dom";

const WorkBrand = () => {
  return (
    <div>
      {/*=== Start Brands Area ===*/}
      <div className="brands-area pt-100">
        <div className="container">
          <div className="brands-title">
            <span data-cues="slideInUp">
              We Worked With Global Largest Brands
            </span>
          </div>
          <div
            className="d-flex justify-content-center justify-content-lg-between flex-wrap gap-2"
            data-cues="slideInUp"
          >
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand1} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand2} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand3} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand4} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand5} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand6} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand7} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand8} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand9} alt="brands" />
              </Link>
            </div>
            <div className="brands-item">
              <Link to="about-us.html">
                <img src={brand10} alt="brands" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Brands Area ===*/}

      {/*=== Start About Us Area ===*/}
      <div className="about-us-area ptb-100" id="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-img" data-cues="slideInUp">
                <img src={aboutUs} alt="about-us" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-content" data-cues="slideInUp">
                <span className="top-title">About Us</span>
                <h2>Professional Design Agency to Provide Solutions</h2>
                <p>
                  Established with a vision to redefine the art of storytelling
                  &amp; design, we have been at the forefront of delivering
                  groundbreaking creative solutions since our inception. Our
                  agency is a dynamic powerhouse of talent, merging artistic
                  flair with strategic acumen to bring visions to life.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="ps-0 list-unstyled about-list">
                      <li>Professional Problem Solutions</li>
                      <li>Customer Relationsh Management</li>
                      <li>Web Design &amp; Development</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ul className="ps-0 list-unstyled about-list">
                      <li>Business Development</li>
                      <li>Content Creation &amp; Brand Strategy</li>
                      <li>Digital Creative Agency</li>
                    </ul>
                  </div>
                </div>
                <div className="d-inline-block">
                  <a
                    href="about-us.html"
                   className="circle-btn text-decoration-none d-flex align-items-center justify-content-center"
                  >
                    <span>Learn More</span>
                    <i className="fa-solid fa-angle-up"></i>
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End About Us Area ===*/}
    </div>
  );
};

export default WorkBrand;