import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";

const TeamTwo = () => {
    return (
        <div className="team-area pt-100 pb-75">
      <div className="container">
        <div className="section-title style-two mw-660" data-cues="slideInUp">
          <span className="top-title style-two">Our Team Members</span>
          <h2>Meet Our Experienced Team Members</h2>
        </div>
        <div className="row justify-content-center" data-cues="slideInUp">
          <div className="col-xl-3 col-md-6">
            <div className="team-single-item">
              <img src={team1} alt="team" />
              <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                <div className="info">
                  <h3>Diana Wilson</h3>
                  <span>UI/UX Designer</span>
                </div>
                <ul className="ps-0 mb-0 list-unstyled social-link">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa-regular fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="team-single-item">
              <img src={team2} alt="team" />
              <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                <div className="info">
                  <h3>Sheila Barrier</h3>
                  <span>Web Developer</span>
                </div>
                <ul className="ps-0 mb-0 list-unstyled social-link">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa-regular fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="team-single-item">
              <img src={team3} alt="team" />
              <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                <div className="info">
                  <h3>Glenda Pellerin</h3>
                  <span>Product Designer</span>
                </div>
                <ul className="ps-0 mb-0 list-unstyled social-link">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa-regular fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="team-single-item">
              <img src={team4} alt="team" />
              <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                <div className="info">
                  <h3>Jessica Parrott</h3>
                  <span>Senior Consultant</span>
                </div>
                <ul className="ps-0 mb-0 list-unstyled social-link">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa-regular fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TeamTwo;