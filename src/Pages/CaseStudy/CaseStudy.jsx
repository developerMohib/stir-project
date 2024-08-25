import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import useDataFetch from "../../components/Hooks/useDataFetch";

const CaseStudy = () => {
  const { data } = useDataFetch({ url: "/caseStudy.json" });

  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Case Study"} />
      <div>
        <div className="container">
          <div className="row">
            {data?.map((bcase, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="recent-cases-single-item style-two mb-4">
                  <a href="cases-study-details.html" className="tag">
                    {bcase.category}
                  </a>
                  <h3>
                    <a href="cases-study-details.html">{bcase.title}</a>
                  </h3>
                  <a href="cases-study-details.html" className="cases-img">
                    <img src={bcase.caseImg} alt="cases" />
                  </a>
                  <p>{bcase.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
