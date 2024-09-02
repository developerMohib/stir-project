import TeamCom from "../../../../components/TeamCom/TeamCom";

const Team = () => {
  return (
    <div className="team-area pt-100 pb-75">
      <div className="container">
        <div className="section-title style-two mw-800" data-cues="slideInUp">
          <h2>Meet Our Experienced Team Members</h2>
        </div>
        <TeamCom len={4} />
      </div>
    </div>
  );
};

export default Team;
