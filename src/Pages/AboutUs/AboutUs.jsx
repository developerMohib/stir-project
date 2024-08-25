import BreadCump from "../../components/BreadCump/BreadCump";
import shapeTwo from "../../assets/images/banner-bg-shape2.png";
import { useEffect, useState } from "react";
import Services from "../../components/Services/Services";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "../../components/Contact/Contact";
import Testominal from "../../components/Testominal/Testominal";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data
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
  if (loading) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
      <BreadCump bgImg={shapeTwo} pageName={"About Us"} />
      <Aboutus />
      <Services data={data} />
      <Testominal />
      <Contact />
    </div>
  );
};

export default AboutUs;
