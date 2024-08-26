import aboutus2 from "../../../../assets/images/about-us-2.png"
const KnowUs = () => {
    return (
        <div className="about-us-area pb-100">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="about-us-img-two" data-cues="slideInUp">
          <img src={aboutus2} alt="about-us" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-us-content-two" data-cues="slideInUp">
          <span className="top-title style-two">Know About Us</span>
          <h2>Most Distinguished Agency in Your City</h2>
          <p>Our approach is rooted in collaboration and customization. We don't believe in one-size-fits-all solutions. Instead, we take the time to comprehensively analyze each client's unique needs, objectives, and industry landscape. By doing so, we ensure that our recommendations...</p>
          <p>Whether it's enhancing market visibility, improving operational efficiency, or implementing cutting-edge technologies, our agency offers a wide spectrum of services from strategic consulting</p>
          <div className="d-flex align-items-center position-relative mt-40">
            <a href="about-us.html" className="main-btn style-two">
              Discover More
              <i className="fa-regular fa-arrow-right" />
            </a>
            <a href="https://youtu.be/bk7McNUjWgw?si=m_dHkilr3ALPzNl9" className="video-btn ms-3 ms-lg-5 popup-youtube">
              <i className="fa-solid fa-play video-btn-animate whites" />
              <span className="d-none d-sm-inline-block">Intro Video</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default KnowUs;