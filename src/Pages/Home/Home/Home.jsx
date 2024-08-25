import { useEffect, useState } from "react";
import BeckToTop from "../../../components/BeckToTop/BeckToTop";
import CaseStudy from "../../../components/CaseStudy/CaseStudy";
import Contact from "../../../components/Contact/Contact";
import Faq from "../../../components/Faq/Faq";
import HeroBanner from "../../../components/HeroBanner/HeroBanner";
import Services from "../../../components/Services/Services";
import Testominal from "./Testominal/Testominal";
import WhoWe from "../../../components/WhoWe/WhoWe";
import WorkBrand from "../../../components/WorkBrand/WorkBrand";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data from public/serviecsOne.json
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("/servicesOne.json"); // Replace with your API endpoint
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
  //   console.log("Fetched Data:", data);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroBanner />
      <WorkBrand />
      <Services data={data} />
      <WhoWe />
      <Testominal />
      <CaseStudy />
      <Faq />
      <Contact />
      <BeckToTop />
    </div>
  );
};

export default Home;
