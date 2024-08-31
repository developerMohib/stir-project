import faqImg from "../../assets/images/faq-img.jpg";
import PropTypes from 'prop-types';

const Faq = ({hideDiv}) => {
  return (
    <div className={`faq-area ${hideDiv ? "ptb-100" : "pb-100"}`}>
  <div className="container">
    <div className="section-title text-start ms-0" data-cues="slideInUp">
      <span className="top-title">FAQs</span>
      <h2>How to Get Quality Work With Us</h2>
    </div>
    <div className={` ${hideDiv ? hideDiv : "faq-img"} `} data-cues="slideInUp">
      <img src={faqImg} alt="faq-img" />
    </div>
    <div className="accordion accordion-content" id="accordionExample" data-cues="slideInUp">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <span className="d-sm-flex align-items-center">
              <span className="flex-shrink-0">
                <span className="count">01</span>
              </span>
              <span className="flex-grow-1 mt-3 mt-sm-0">
                <span>What is the difference between creative agency and marketing agency?</span>
              </span>
            </span>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Your success is our priority. We measure our achievements by the success stories of our clients. Through seamless communication, meticulous attention to detail, and a passion for perfection, we strive to exceed your expectations.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <span className="d-sm-flex align-items-center">
              <span className="flex-shrink-0">
                <span className="count">02</span>
              </span>
              <span className="flex-grow-1 mt-3 mt-sm-0">
                <span>What is the difference between media and creative agency?</span>
              </span>
            </span>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Your success is our priority. We measure our achievements by the success stories of our clients. Through seamless communication, meticulous attention to detail, and a passion for perfection, we strive to exceed your expectations.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <span className="d-sm-flex align-items-center">
              <span className="flex-shrink-0">
                <span className="count">03</span>
              </span>
              <span className="flex-grow-1 mt-3 mt-sm-0">
                <span>What is the difference between media and creative agency?</span>
              </span>
            </span>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Your success is our priority. We measure our achievements by the success stories of our clients. Through seamless communication, meticulous attention to detail, and a passion for perfection, we strive to exceed your expectations.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <span className="d-sm-flex align-items-center">
              <span className="flex-shrink-0">
                <span className="count">04</span>
              </span>
              <span className="flex-grow-1 mt-3 mt-sm-0">
                <span>What is the difference between creative agency and studio?</span>
              </span>
            </span>
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Your success is our priority. We measure our achievements by the success stories of our clients. Through seamless communication, meticulous attention to detail, and a passion for perfection, we strive to exceed your expectations.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <span className="d-sm-flex align-items-center">
              <span className="flex-shrink-0">
                <span className="count">05</span>
              </span>
              <span className="flex-grow-1 mt-3 mt-sm-0">
                <span>Who is responsible for the creative product of an agency?</span>
              </span>
            </span>
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Your success is our priority. We measure our achievements by the success stories of our clients. Through seamless communication, meticulous attention to detail, and a passion for perfection, we strive to exceed your expectations.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
Faq.propTypes = {
  hideDiv : PropTypes.string,
}
export default Faq;
