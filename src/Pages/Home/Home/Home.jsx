import BeckToTop from "../../../components/BeckToTop/BeckToTop";
import CaseStudy from "../../../components/CaseStudy/CaseStudy";
import Contact from "../../../components/Contact/Contact";
import Faq from "../../../components/Faq/Faq";
import HeroBanner from "../../../components/HeroBanner/HeroBanner";
import Services from "../../../components/Services/Services";
import Testominal from "./Testominal/Testominal";
import WhoWe from "../../../components/WhoWe/WhoWe";
import WorkBrand from "../../../components/WorkBrand/WorkBrand";
import useDataFetch from "../../../components/Hooks/useDataFetch";

const Home = () => {
  const { data } = useDataFetch({ url: "/servicesOne.json"});
  
  // Get the first four items from the data array
  const limitedData = data ? data.slice(0, 4) : [];
  return (
    <div>
      <HeroBanner />
      <WorkBrand />
      <Services data={limitedData} />
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
