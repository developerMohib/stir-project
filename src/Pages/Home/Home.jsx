import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Services from "../../components/Services/Services";
import WorkBrand from "../../components/WorkBrand/WorkBrand";

const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <WorkBrand/>
            <Services />
        </div>
    );
};

export default Home;