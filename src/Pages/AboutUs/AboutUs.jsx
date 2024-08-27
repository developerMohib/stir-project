import BreadCump from "../../components/BreadCump/BreadCump";
import shapeTwo from "../../assets/images/banner-bg-shape2.png";
import Services from "../../components/Services/Services";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "../../components/Contact/Contact";
import Testominal from "../../components/Testominal/Testominal";
import useDataFetch from "../../components/Hooks/useDataFetch";

const AboutUs = () => {
  const { data } = useDataFetch({ url: "/servicesOne.json" });
  // Get the first four items from the data array
  const limitedData = data ? data.slice(0, 4) : [];
  return (
    <div>
      <BreadCump bgImg={shapeTwo} pageName={"About Us"} />
      <Aboutus />
      <Services data={limitedData} bgColor={"#fff"} />
      <Testominal />
      <Contact />
    </div>
  );
};

export default AboutUs;
