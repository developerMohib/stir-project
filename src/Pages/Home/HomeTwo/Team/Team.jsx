import TeamCom from "../../../../components/TeamCom/TeamCom";

const Team = () => {
  return (
    <div className="team-area pt-100 pb-75">
      <div className="container">
        <div className="section-title style-two mw-660" data-cues="slideInUp">
          <span className="top-title style-two">Our Team Members</span>
          <h2>Meet Our Experienced Team Members</h2>
        </div>
        <TeamCom />
      </div>
    </div>
  );
};

export default Team;
