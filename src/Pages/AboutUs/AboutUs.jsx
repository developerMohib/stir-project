import BreadCump from "../../components/BreadCump/BreadCump";
import shapeTwo from "../../assets/images/banner-bg-shape2.png";
import Services from "../../components/Services/Services";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "../../components/Contact/Contact";
import Testominal from "../../components/Testominal/Testominal";
import useDataFetch from "../../components/Hooks/useDataFetch";

const AboutUs = () => {
  const { data } = useDataFetch({ url: "/servicesOne.json" });
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
