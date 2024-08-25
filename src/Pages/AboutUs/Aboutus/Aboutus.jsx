import aboutus from "../../../assets/images/about-us-3.jpg"
const Aboutus = () => {
  return (
    <>
      {/*=== Start About Area ===*/}
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img-three">
                <img src={aboutus} alt="about-us" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-three">
                <span className="top-title">About Us</span>
                <h2>Innovative Strategies and Creative Solutions</h2>
                <p>
                  Established with a vision to redefine the art of storytelling
                  &amp; design, we have been at the forefront of delivering
                  groundbreaking creative solutions since our inception. Our
                  agency is a dynamic powerhouse.
                </p>
                <p>
                  Monitoring &amp; managing online reviews, feedback &amp;
                  mentions to maintain positive brand reputation and address any
                  negative publicity effectively.
                </p>
                <p>
                  Advising on &amp; implementing measures to enhance online
                  security, protect data &amp; ensure compliance with industry
                  regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End About Area ===*/}
    </>
  );
};

export default Aboutus;
