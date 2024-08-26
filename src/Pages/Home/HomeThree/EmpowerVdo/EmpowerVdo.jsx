import vdoImg from "../../../../assets/images/video-img-2.jpg"
const EmpowerVdo = () => {
  return (
    <div className="video-area">
      <div className="container">
        <div className="section-title style-two" data-cues="slideInUp">
          <h2>
            Empower Your Ideas in Our Design-Tech Workshops and Journey to Make
            Reality in Our Design-Creative Agency
          </h2>
        </div>
        <div className="video-img-wrap" data-cues="slideInUp">
          <img src={vdoImg} alt="video-img" />
          <div className="position-absolute top-50 start-50 translate-middle">
            <a
              href="https://youtu.be/bk7McNUjWgw?si=m_dHkilr3ALPzNl9"
              className="video-btns ms-3 ms-lg-5 popup-youtube"
            >
              <i className="fa-solid fa-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerVdo;
