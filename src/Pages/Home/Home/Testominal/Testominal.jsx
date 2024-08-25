
const Testominal = () => {
  return (
    <div>
      {/*=== Start Testimonials Area ===*/}
      <div className="testimonial-area pb-100">
        <div className="container">
          <div className="testimonial-slide owl-carousel owl-theme">
            <div className="d-md-flex align-items-center testimonial-single-item">
              <div className="flex-shrink-0">
                <img
                  src="assets/images/testimonial-1.jpg"
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
              <img src="assets/images/quat.svg" className="quat" alt="quat" />
            </div>
            <div className="d-md-flex align-items-center testimonial-single-item">
              <div className="flex-shrink-0">
                <img
                  src="assets/images/testimonial-2.jpg"
                  className="testimonial-img"
                  alt="testimonial"
                />
              </div>
              <div className="flex-grow-1 ms-md-4 mt-3 mt-md-0">
                <p>
                  With Established a vision to redefine the art of storytelling
                  &amp; design, we have been at the forefront of groundbreaking
                  delivering creative solutions since our inception. Our agency
                  is a dynamic powerhouse talent of.
                </p>
                <h4>
                  Alex Phillips / <span>Product Sale</span>
                </h4>
              </div>
              <img src="assets/images/quat.svg" className="quat" alt="quat" />
            </div>
          </div>
        </div>
      </div>
      {/*=== End Testimonials Area ===*/}
    </div>
  );
};

export default Testominal;
