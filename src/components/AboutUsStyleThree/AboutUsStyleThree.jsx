import { useEffect } from "react";
import weare2 from "../../assets/images/who-we-are-img-2.jpg";

const AboutUsStyleThree = () => {
    useEffect(() => {
        const skillBars = document.querySelectorAll('.skill-bar');
    
        skillBars.forEach((skillBar) => {
          const progressContent = skillBar.querySelector('.progress-content');
          const progressNumberMark = skillBar.querySelector('.progress-number-mark');
          const dataPercentage = skillBar.getAttribute('data-percentage');
    
          // Set initial styles for smooth transitions
          progressContent.style.transition = 'width 2s ease';
          progressNumberMark.style.position = 'relative';
    
          // Animate progress bar width
          progressContent.style.width = dataPercentage;
    
          let start = null;
    
          // Animate progress number mark
          function animateProgressNumberMark(timestamp) {
            if (!start) start = timestamp;
            let progress = timestamp - start;
            let percentage = Math.min((progress / 2000) * parseFloat(dataPercentage), parseFloat(dataPercentage));
            progressNumberMark.style.left = percentage + '%';
            progressNumberMark.querySelector('.percent').innerHTML = Math.round(percentage) + '%';
    
            if (progress < 2000) {
              requestAnimationFrame(animateProgressNumberMark);
            }
          }
    
          requestAnimationFrame(animateProgressNumberMark);
        });
      }, []);
    return (
        <div id="about-us" className="who-we-are-area pt-75 pb-100 bg-color-f6f5f3">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6" data-cues="slideInUp">
              <div className="who-we-are-img-two">
                <img src={weare2} alt="who-we-are-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-we-are-content-two" data-cues="slideInUp">
                <h2>We Offer a Wide Range of Brand Services</h2>
                <p>
                  We are a Digital agency working with brands building insightful
                  strategy, creating unique designs and crafting value
                </p>
                <div className="all-skill-bar">
                  <div className="skill-bar" data-percentage="85%">
                    <h4 className="progress-title-holder">
                      <span className="progress-title">Development</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content" />
                    </div>
                  </div>
                  <div className="skill-bar" data-percentage="65%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">Advertising</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content" />
                    </div>
                  </div>
                  <div className="skill-bar" data-percentage="90%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">Marketing</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content" />
                    </div>
                  </div>
                  <div className="skill-bar" data-percentage="75%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">Branding</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUsStyleThree;