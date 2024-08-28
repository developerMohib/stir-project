import { Link } from "react-router-dom";
import useDataFetch from "../../../../components/Hooks/useDataFetch";
import case1 from "../../../../assets/images/cases-1.jpg"
import case2 from "../../../../assets/images/cases-2.jpg"
import case3 from "../../../../assets/images/cases-3.jpg"

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
    <div className="cases-slide owl-carousel owl-theme">
      <div className="recent-cases-single-item">
        <a href="case-study.html" className="tag">Marketing</a>
        <h3>
          <a href="case-study.html">Business Development and Partnerships</a>
        </h3>
        <a href="case-study.html" className="cases-img">
          <img src={case1} alt="cases" />
        </a>
        <p>Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies...</p>
      </div>
      <div className="recent-cases-single-item">
        <a href="case-study.html" className="tag">Website Design</a>
        <h3>
          <a href="case-study.html">Crisis Management and Risk Mitigation</a>
        </h3>
        <a href="case-study.html" className="cases-img">
          <img src={case2} alt="cases" />
        </a>
        <p>Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies...</p>
      </div>
      <div className="recent-cases-single-item">
        <a href="case-study.html" className="tag">Consulting</a>
        <h3>
          <a href="case-study.html">Creative Design &amp; Content Creation</a>
        </h3>
        <a href="case-study.html" className="cases-img">
          <img src={case3} alt="cases" />
        </a>
        <p>Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies...</p>
      </div>
      <div className="recent-cases-single-item">
        <a href="case-study.html" className="tag">Marketing</a>
        <h3>
          <a href="case-study.html">Business Development and Partnerships</a>
        </h3>
        <a href="case-study.html" className="cases-img">
          <img src={case1} alt="cases" />
        </a>
        <p>Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies...</p>
      </div>
      <div className="recent-cases-single-item">
        <a href="case-study.html" className="tag">Website Design</a>
        <h3>
          <a href="case-study.html">Crisis Management and Risk Mitigation</a>
        </h3>
        <a href="case-study.html" className="cases-img">
          <img src={case2} alt="cases" />
        </a>
        <p>Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies...</p>
      </div>
      <div className="recent-cases-single-item">
        <a href="case-study.html" className="tag">Consulting</a>
        <h3>
          <a href="case-study.html">Creative Design &amp; Content Creation</a>
        </h3>
        <a href="case-study.html" className="cases-img">
          <img src={case3} alt="cases" />
        </a>
        <p>Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies...</p>
      </div>
    </div>
  </div>
</div>


  );
};

export default RecentCase;
