import CaseStudy from "../../../components/CaseStudy/CaseStudy";
import Contact from "../../../components/Contact/Contact";
import Faq from "../../../components/Faq/Faq";
import HeroBanner from "../../../components/HeroBanner/HeroBanner";
import Services from "../../../components/Services/Services";
import WhoWe from "../../../components/WhoWe/WhoWe";
import WorkBrand from "../../../components/WorkBrand/WorkBrand";
import useDataFetch from "../../../components/Hooks/useDataFetch";
import TestominalHome from "../../../components/TestominalHome/TestominalHome";

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
      <TestominalHome />
      <CaseStudy />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
