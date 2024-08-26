import Banner from "./Banner/Banner";
import GetTouch from "./GetTouch/GetTouch";
import KnowUs from "./KnowUs/KnowUs";
import RecentCase from "./RecentCase/RecentCase";
import Services from "./Services/Services";
import Statictics from "./Statictics/Statictics";

const HomeTwo = () => {
    return (
        <div>
            <Banner />
            <KnowUs />
            <Services />
            <Statictics />
            <RecentCase />
            <GetTouch />
        </div>
    );
};

export default HomeTwo;