import { useEffect, useState } from "react";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";

const CaseStudy = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("/caseStudy.json"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
console.log('case study', data)

  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Case Study"} />
      <div>
        <div className="container">
            <div className="row">
                {data?.map}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
