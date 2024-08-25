import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import useDataFetch from "../../components/Hooks/useDataFetch";
const Team = () => {
  const { data } = useDataFetch({ url: "/team.json" });
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Team"} />

      <div className="team-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {data?.map((member, idx) => (
              <div key={idx} className="col-xl-3 col-md-6">
                <div className="team-single-item style-two">
                  <img src={member.image} alt="team" />
                  <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                    <div className="info">
                      <h3> {member.name} </h3>
                      <span> {member.proffession} </span>
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
            ))}
            <div className="col-md-12">
              <div className="pagination">
                <a href="team.html" className="next page-count hover-style">
                  <div className="inner-border">
                    <i className="icofont-simple-left" />
                  </div>
                </a>
                <a
                  href="team.html"
                  className="page-count current hover-style"
                  aria-current="page"
                >
                  <div className="inner-border">1</div>
                </a>
                <a href="team.html" className="page-count hover-style">
                  <div className="inner-border">2</div>
                </a>
                <a href="team.html" className="page-count hover-style">
                  <div className="inner-border">3</div>
                </a>
                <a href="team.html" className="page-count hover-style">
                  <div className="inner-border">4</div>
                </a>
                <a href="team.html" className="next page-count hover-style">
                  <div className="inner-border">
                    <i className="icofont-simple-right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
