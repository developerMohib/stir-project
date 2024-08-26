import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import TeamCom from "../../components/TeamCom/TeamCom";
const Team = () => {
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Team"} />
      <div className="pt-100">
        <TeamCom />
        <div className="col-md-12 pb-100">
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
      X
    </div>
  );
};

export default Team;
