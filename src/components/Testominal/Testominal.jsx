import testominal3 from "../../assets/images/testimonial-3.png";
import testominal6 from "../../assets/images/testimonial-6.jpg";
const Testominal = () => {
  return (
    <div className="testimonials-area-three overflow-hidden">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="section-title ms-0 text-start">
              <h2>Testimonials</h2>
            </div>
            <div className="testimonial-slide-two owl-carousel owl-theme">
              <div className="testimonials-single-item-two style-three">
                <ul className="ps-0 list-unstyled d-flex gap-2 review">
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                </ul>
                <p>
                  Whether it's enhancing market visibility, improving
                  operational efficiency, or implementing cutting-edge
                  technologies, our agency offers a wide spectrum of services.
                  From strategic consulting &amp; digital transformation to
                  marketing strategies &amp; financial advisory...
                </p>
                <div className="d-flex align-items-center info">
                  <div className="flex-shrink-0">
                    <img
                      src={testominal3}
                      className="rounded-circle"
                      alt="testimonial"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h3>Brandi Rowe</h3>
                    <span>Marketing Lead at Technlogia</span>
                  </div>
                </div>
              </div>
              <div className="testimonials-single-item-two style-three">
                <ul className="ps-0 list-unstyled d-flex gap-2 review">
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                </ul>
                <p>
                  Whether it's enhancing market visibility, improving
                  operational efficiency, or implementing cutting-edge
                  technologies, our agency offers a wide spectrum of services.
                  From strategic consulting &amp; digital transformation to
                  marketing strategies &amp; financial advisory...
                </p>
                <div className="d-flex align-items-center info">
                  <div className="flex-shrink-0">
                    <img
                      src={testominal3}
                      className="rounded-circle"
                      alt="testimonial"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h3>Brandi Rowe</h3>
                    <span>Marketing Lead at Technlogia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-img-three mt-4 mt-lg-0">
              <img src={testominal6} alt="testimonial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testominal;
