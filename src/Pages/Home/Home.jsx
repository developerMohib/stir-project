import CaseStudy from "../../components/CaseStudy/CaseStudy";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/Faq/Faq";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Services from "../../components/Services/Services";
import Testominal from "../../components/Testominal/Testominal";
import WhoWe from "../../components/WhoWe/WhoWe";
import WorkBrand from "../../components/WorkBrand/WorkBrand";

const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <WorkBrand/>
            <Services />
            <WhoWe />
            <Testominal />
            <CaseStudy />
            <Faq />
            <Contact />
        </div>
    );
};

export default Home;