import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import Pagination from "../../components/Pagination/Pagination";
import TeamCom from "../../components/TeamCom/TeamCom";
const Team = () => {
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Team"} />
      <div className="ptb-100">
        <TeamCom />
        <Pagination link={"/team"} />
      </div>
    </div>
  );
};

export default Team;
