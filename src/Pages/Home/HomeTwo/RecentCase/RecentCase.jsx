import { Link } from "react-router-dom";
import useDataFetch from "../../../../components/Hooks/useDataFetch";

const RecentCase = () => {
  // const { data } = useDataFetch({ url: "/caseStudy.json" });
  const { data: recentCase } = useDataFetch({ url: "/recentCase.json" });
  return (
    <div className="recent-cases-area pb-100">
      <div className="container">
        <div className="section-title ms-0 text-start" data-cues="slideInUp">
          <span className="top-title style-two">Some Of Our Recent Cases</span>
          <h2>Unveiling Our Most Impactful Solutions for You</h2>
        </div>        
        <div className="row">
          {recentCase?.map((bcase, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="recent-cases-single-item style-two mb-4">
                <a href="cases-study-details.html" className="tag">
                  {bcase.category}
                </a>
                <h3>
                  <a href="cases-study-details.html">{bcase.title}</a>
                </h3>
                <a href="cases-study-details.html" className="cases-img">
                  <img src={bcase.image} alt="cases" />
                </a>
                <p>{bcase.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCase;
