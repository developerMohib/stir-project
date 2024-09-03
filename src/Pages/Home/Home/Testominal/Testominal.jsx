import "./testominal.css";
import test1 from "../../../../assets/images/testimonial-1.jpg";
import test2 from "../../../../assets/images/testimonial-2.jpg";
import quat from "../../../../assets/images/quat.svg";
import OwlCarousel from "react-owl-carousel";
const Testominal = () => {
  const options = {
    items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		navText: [
			"<i class='fa-regular fa-arrow-left'></i>",
			"<i class='fa-regular fa-arrow-right'></i>",
		],
  };

  return (
    <div>
      <div className="testimonial-area pb-100">
        <div className="container">
          <OwlCarousel
            className="testimonial-slide owl-carousel owl-theme"
            {...options}
          >
            <div className="d-md-flex align-items-center testimonial-single-item">
              <div className="flex-shrink-0">
                <img
                  src={test1}
                  className="testimonial-img"
                  alt="testimonial"
                />
              </div>
              <div className="flex-grow-1 ms-md-4 mt-3 mt-md-0">
                <p>
                  Established with a vision to redefine the art of storytelling
                  &amp; design, we have been at the forefront of delivering
                  groundbreaking creative solutions since our inception. Our
                  agency is a dynamic powerhouse of talent.
                </p>
                <h4>
                  Mark Phillips / <span>Product Designer</span>
                </h4>
              </div>
              <img src={quat} className="quat" alt="quat" />
            </div>
            <div className="d-md-flex align-items-center testimonial-single-item">
              <div className="flex-shrink-0">
                <img
                  src={test2}
                  className="testimonial-img"
                  alt="testimonial"
                />
              </div>
              <div className="flex-grow-1 ms-md-4 mt-3 mt-md-0">
                <p>
                  Established with a vision to redefine the art of storytelling
                  &amp; design, we have been at the forefront of delivering
                  groundbreaking creative solutions since our inception. Our
                  agency is a dynamic powerhouse of talent.
                </p>
                <h4>
                  Mark Phillips / <span>Product Designer</span>
                </h4>
              </div>
              <img src={quat} className="quat" alt="quat" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testominal;
