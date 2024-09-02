import useDataFetch from "../Hooks/useDataFetch";

const TeamCom = ({len}) => {
  const { data } = useDataFetch({ url: "/team.json" });
  const displayData = len && len <= data?.length ? data.slice(0, len) : data;
  return (
    <div className="team-area">
      <div className="container">
        <div className="row justify-content-center">
          {displayData?.map((member, idx) => (
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
        </div>
      </div>
    </div>
  );
};

export default TeamCom;
