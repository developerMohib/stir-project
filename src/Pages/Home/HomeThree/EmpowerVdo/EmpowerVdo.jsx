import { useEffect } from "react";
import vdoImg from "../../../../assets/images/video-img-2.jpg";
import $ from "jquery";
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";

const EmpowerVdo = () => {
  useEffect(() => {
    // Initialize magnificPopup
    $(".popup-youtube").magnificPopup({
      disableOn: 300,
      type: "iframe",
      mainClass: "mfp-fade",
      fixedContentPos: false,
      removalDelay: 160,
      preloader: false,
    });

    // Cleanup function to remove event listeners
    return () => {
      $(".popup-youtube").magnificPopup("close");
    };
  }, []);
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
              href="https://www.youtube.com/watch?v=oGOO94rRzCQ"
              // className="video-btns ms-3 ms-lg-5 popup-youtube"
              className="popup-youtube video-btns position-absolute top-50 start-50 translate-middle text-decoration-none video-btn-animate"
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
