import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import caseDetails from "../../assets/images/cases-details-img.jpg";
import case10 from "../../assets/images/cases-10.jpg";
import case11 from "../../assets/images/cases-11.jpg";
const CaseDetails = () => {
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Cases Study Details"} />
      <div className="cases-details-area ptb-100">
        <div className="container">
          <div className="cases-details-content">
            <div className="cases-details-img">
              <img
                src={caseDetails}
                alt="cases-details-img"
              />
            </div>
            <div className="cases-details-top-content">
              <div className="row">
                <div className="col-lg-5">
                  <h2>Business Development and Partnerships</h2>
                </div>
                <div className="col-lg-7">
                  <p>
                    In the ever-evolving landscape of digital marketing,
                    effective business development and strategic partnerships
                    are crucial for sustained success. This case study explores
                    how [Your Digital Agency], a leading player in the digital
                    realm, partnered with [Client X] to enhance business growth
                    and create lasting synergies.
                  </p>
                </div>
              </div>
            </div>
            <div className="cases-details-content">
              <p>
                [Client X] is a [industry/sector] company facing challenges
                related to [specific issues, goals, or market challenges].
                Seeking a strategic approach to business development, they
                turned to Stir for expertise. The primary goals of this
                collaboration were to: executed the devised strategies with
                precision and agility. Challenges, such as [mention any
                challenges encountered], were addressed through
              </p>
              <div className="mb-30" />
              <h3>Strategy and Planning How Increase Business In Short Time</h3>
              <p>
                executed the devised strategies with precision and agility.
                Challenges, such as [mention any challenges encountered], were
                addressed through [specific solutions or adjustments]. The
                partnership development process involved meticulous negotiations
                and relationship-building efforts. executed the devised
                strategies with precision and agility. Challenges, such as
                [mention any challenges encountered], were addressed through
                [specific solutions.
              </p>
              <div className="mb-30" />
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-3 mb-md-0">
                  <ul className="cases-details-list ps-0 mb-0 list-unstyled">
                    <li>
                      40% increase in online engagement and brand visibility.
                    </li>
                    <li>Successful implementation of specific</li>
                    <li>30% growth in overall business metrics within</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="d-flex justify-content-md-end">
                    <ul className="cases-details-list ps-0 mb-0 list-unstyled">
                      <li>Conversion Rate Optimization</li>
                      <li>Brand Recognition and Thought Leadership</li>
                      <li>ROI on Digital Ad Campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-30" />
              <div className="row">
                <div className="col-sm-6">
                  <div className="case-img mb-4 mb-sm-0">
                    <img src={case10} alt="cases" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="case-img">
                    <img src={case11} alt="cases" />
                  </div>
                </div>
              </div>
              <div className="mb-30" />
              <p>
                The collaboration between Stir and Client X exemplifies the
                power of effective business development and strategic
                partnerships in the digital realm. The results achieved
                underscore the importance of a tailored, holistic approach to
                achieving and exceeding business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
