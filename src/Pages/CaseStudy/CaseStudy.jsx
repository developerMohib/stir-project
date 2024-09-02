import { Link } from "react-router-dom";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import Contact from "../../components/Contact/Contact";
import useDataFetch from "../../components/Hooks/useDataFetch";
import Pagination from "../../components/Pagination/Pagination"
import Testominal from "../../components/Testominal/Testominal";
const CaseStudy = () => {
  const { data } = useDataFetch({ url: "/caseStudy.json" });

  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Case Study"} />
        <div className="container ptb-100">
          <div className="row">
            {data?.map((bcase, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="recent-cases-single-item style-two mb-4">
                  <Link to="/cases-study-details" className="tag">
                    {bcase.category}
                  </Link>
                  <h3>
                    <Link to="/cases-study-details">{bcase.title}</Link>
                  </h3>
                  <Link to="/cases-study-details" className="cases-img">
                    <img src={bcase.caseImg} alt="cases" />
                  </Link>
                  <p>{bcase.details}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination />
          <Testominal />
          <Contact bgColor={" "} />
        </div>
    </div>
  );
};

export default CaseStudy;
